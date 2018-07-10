# Contributing to eslint-config-skyscanner-with-prettier

## Table of contents

* [Prerequisites](#prerequisites)
* [Getting started](#getting-started)

## Prerequisites

### Licence

By contributing your code, you agree to license your contribution under the terms of the [APLv2](./LICENSE).

All files are released with the Apache 2.0 licence.

If you are adding a new file it should have a header comment containing licence information:

<details>
<summary>Show/hide licence header</summary>

```
eslint-config-skyscanner-with-prettier

Copyright 2018 Skyscanner Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

</details>

### Installing Node

eslint-config-skyscanner-with-prettier is developed using Node, using the following versions:

* `LTS` (Node)
* `^5.6.0` (npm)

If you use [nvm](https://github.com/creationix/nvm) or [nave](https://github.com/isaacs/nave) to manage your Node environment, eslint-config-skyscanner-with-prettier has built-in support for these. Just run `nvm use` or `nave auto` to install the correct Node version.

To install npm, use `npm install --global npm@^5.6.0`.



## Getting started

### Setting up the project

To setup the project run

```bash
DISABLE_SKYSCANNER_ESLINT_WITH_PRETTIER_INSTALL_SCRIPT=1 npm install
```

### Linting

The config defined in the project is used for the project itself and the linter can be invoked via the NPM script `lint`

```bash
npm run lint
```

