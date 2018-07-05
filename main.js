#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const child_process = require('child_process');
const colors = require('colors/safe');

const ESLINTRC_FILES = [
  '.eslintrc',
  '.eslintrc.yaml',
  '.eslintrc.yml',
  '.eslintrc.json',
  '.eslintrc.js',
];
const PRETTIERRC_FILES = [
  '.prettierrc',
  '.prettierrc.json',
  '.prettierrc.yaml',
  '.prettierrc.yml',
  '.prettierrc.js',
  'prettier.config.js',
];

const NPM_SCRIPTS = `
  "lint:js": "eslint . --ext js,jsx",
  "lint:js:fix": "eslint . --ext js,jsx --fix",
  "prettier": "prettier --config .prettierrc --write \\\"**/*.{js,jsx}\\\"",
`;

const cwd = process.env.INIT_CWD;

if (!cwd) {
  console.error(
    '$INIT_CWD not available in environment please use NPM 5.4 or greater or manually install peer dependencies',
  );
  process.exit(1);
}

const packageJSONPathForPackage = packageName =>
  path.join(cwd, 'node_modules', packageName, 'package.json');

const readPackageJSON = fullPath => {
  const file = fs.readFileSync(fullPath, { encoding: 'utf8' });

  return JSON.parse(file);
};

const createInstallCommand = dependencies =>
  `npm install --save-dev ${dependencies
    .map(([name, range]) => `${name}@'${range}'`)
    .join(' ')}`;

const fileExsists = path => fs.existsSync(path);

const hasEslintRcFile = cwd =>
  ESLINTRC_FILES.some(file => fileExsists(path.join(cwd, file)));
const hasEslintPackageConfig = packageJSON =>
  packageJSON.hasOwnProperty('eslintConfig');

const hasPrettierRcFile = cwd =>
  PRETTIERRC_FILES.some(file => fileExsists(path.join(cwd, file)));
const hasPrettierPackageConfig = packageJSON =>
  packageJSON.hasOwnProperty('prettier');

try {
  const skyscannerWithPrettierConfig = readPackageJSON(
    packageJSONPathForPackage('eslint-config-skyscanner-with-prettier'),
  );
  const command = createInstallCommand(
    Object.entries(skyscannerWithPrettierConfig.peerDependencies),
  );
  console.log(
    `Installing direct peerDependencies for \`eslint-config-skyscanner-with-prettier\`: ${colors.blue(
      command,
    )}`,
  );
  child_process.execSync(
    createInstallCommand(
      Object.entries(skyscannerWithPrettierConfig.peerDependencies),
    ),
    { cwd },
  );

  const skyscannerConfig = readPackageJSON(
    packageJSONPathForPackage('eslint-config-skyscanner'),
  );
  const prettierPlugin = readPackageJSON(
    packageJSONPathForPackage('eslint-plugin-prettier'),
  );
  const projectPackageJSON = readPackageJSON(path.join(cwd, 'package.json'));

  const skyscannerConfigPeerNames = Object.keys(
    skyscannerConfig.peerDependencies,
  );
  const prettierPluginPeerNames = Object.keys(prettierPlugin.peerDependencies);
  const hasIntersection = skyscannerConfigPeerNames.reduce(
    (acc, value) => acc || prettierPluginPeerNames.indexOf(value) !== -1,
    false,
  );

  if (hasIntersection) {
    throw new Error(`Unexpected intersection among peer dependencies`);
  }

  const dependenciesToInstall = [].concat(
    Object.entries(skyscannerConfig.peerDependencies),
    Object.entries(prettierPlugin.peerDependencies),
  );

  const npmInstall = `npm install --save-dev ${dependenciesToInstall
    .map(([name, range]) => `${name}@'${range}'`)
    .join(' ')}`;
  console.log(
    `Installing further peer dependencies for \`eslint-config-skyscanner-with-prettier\`: ${colors.blue(
      npmInstall,
    )}`,
  );
  child_process.execSync(npmInstall, { cwd });
  console.log(colors.green('All peer dependencies installed successfully'));

  const hasExistingEslintConfig =
    hasEslintRcFile(cwd) || hasEslintPackageConfig(projectPackageJSON);

  if (hasExistingEslintConfig) {
    console.log(
      'Please add "extends": [\'skyscanner-with-prettier\'] to your eslint config and remove any extension of `skyscanner`',
    );
  } else {
    child_process.execSync(
      `cp ${path.join(__dirname, 'eslintrc.template')} ${path.join(
        cwd,
        '.eslintrc',
      )}`,
    );
    console.log('We created `.eslintrc.json` for you.');
  }

  const hasExistingPrettierConfig =
    hasPrettierRcFile(cwd) || hasPrettierPackageConfig(projectPackageJSON);

  if (!hasExistingPrettierConfig) {
    child_process.execSync(
      `cp ${path.join(__dirname, 'prettierrc.template')} ${path.join(
        cwd,
        '.prettierrc',
      )}`,
    );
    console.log('We created `.prettierrc` for you.');
  }
  console.log(
    `All done, we suggest you add the following npm scripts to your package.json:\n ${colors.blue(NPM_SCRIPTS)}`,
  );
} catch (e) {
  console.error(colors.red('Something has gone wrong'));
  console.error(e);
  process.exit(1);
}
