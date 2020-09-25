#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd dist

git init
git add .
git commit -m 'deploy'

git push -f https://github.com/tessai9/ghost_house_vr.git master:gh-pages

cd -
