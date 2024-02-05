#!/usr/bin/env sh

yarn build
cd dist
echo "" > .nojekyll
echo "brin.is-a.dev" > CNAME

git init
git checkout -B main
git add -A
git commit -m "deploy"

git push -f https://github.com/xXTgamerXx/old-website-2.git main:gh-pages
cd ..