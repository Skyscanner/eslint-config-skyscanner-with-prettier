#!/usr/bin/env bash

cp .package.json package.json

npm install --no-shrinkwrap --no-package-lock
npm test

git clean -f -x -d
