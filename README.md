# eslint-config-skyscanner-with-prettier

This package contains an encapsulated setup for ESLint according to Skyscannner's best practices plus integrated support for Prettier via eslint fix.

## Installation

```bash
npm install --save-dev eslint-config-skyscanner-with-prettier
```

If you already have a `.eslintrc` you need to change it to have `"extends": ["skyscanner-with-prettier"]` and remove any references to the base `"skyscanner"` config.

## Editor integration

To enable prettier format on save setup your editor to run eslint fix on save.
