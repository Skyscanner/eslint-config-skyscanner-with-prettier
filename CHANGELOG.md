# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## UNRELEASED

### Breaking
- Bump `eslint-config-skyscanner` to `6.0.0`. **`eslint-config-skyscanner-with-prettier` is deprecated**: Prettier is now included in `eslint-config-skyscanner`, and this package is just a wrapper around it. It's recommended to switch to `eslint-config-skyscanner` as soon as possible, as `eslint-config-skyscanner-with-prettier` is deprecated and will be archived soon.

## 1.0.0 - Moving to wrapping `eslint-config-skyscanner`

### Changed
- Bump `eslint-config-skyscanner` to `5.0.0`. Prettier is now included in `eslint-config-skyscanner`, and this package is just a wrapper around it. It's recommended to switch to `eslint-config-skyscanner` as soon as possible, as `eslint-config-skyscanner-with-prettier` is deprecated and will be archived soon.

## 0.8.0 - 2019-02-04

- Depend on the beta version of `eslint-config-skyscanner`.

## 0.7.0 - 2019-01-30

- Bump `eslint-config-skyscanner` to `4.0.0`.

## 0.6.0 - 2019-01-29 Add cross platform support

### Changed
- Rely on `fs` for filesystem tasks.

## 0.5.0 - 2019-01-14 Updated dependencies

### Changed
- Updated dependencies:
  - colors
  - eslint
  - eslint-config-prettier
  - eslint-config-skyscanner
  - eslint-plugin-jsx-a11y
  - eslint-plugin-prettier
  - eslint-plugin-react
  - prettier

## 0.4.0 - 2018-10-04 Updated dependencies

### Changed
- Updated eslint-config-skyscanner and associated peer deps.

## 0.3.1 - 2018-09-26 Use .eslintrc.json over .eslintrc

### Changed
- Change default eslintrc filename to `.eslintrc.json` (instead of `.eslintrc`).

## 0.3.0 - 2018-08-28 Updated dependencies

### Changed
- Updated eslint-config-skyscanner and associated peer deps.

## 0.2.2 - 2018-07-20 Updated dependencies

### Fixed
- Updated eslint-plugin-backpack.

## 0.2.1 - 2018-07-20 Updated dependencies

### Fixed
- Updated eslint-plugin-backpack.

## 0.2.0 - 2018-07-16 Updated dependencies

### Changed
- Updated eslint-config-skyscanner and eslint-plugin-backpack.

## 0.1.1 - 2018-07-13 Updated dependencies

### Fixed
- Updated dependencies.

## 0.1.0 - 2018-07-13 Move eslint_d to dev dependency

### Changed
- Moved `eslint_d` from a `dependency` to a `devDependency`.

## 0.0.2 - 2018-07-13 Updated dependencies

### Changed
- Updated dependencies.

## 0.0.1 - 2018-07-13 Initial release

### Added
- Initial release.
