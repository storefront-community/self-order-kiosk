#!/bin/bash

set -e

npm install
npm run build
git worktree add ./gh-pages gh-pages
cp -r ./dist/* ./gh-pages/
echo "kiosk.storefront.community" > ./gh-pages/CNAME
cd ./gh-pages
git config --global user.name "$GIT_CONFIG_NAME"
git config --global user.email "$GIT_CONFIG_EMAIL"
git commit -am "[skip ci] Deploy $CIRCLE_TAG"
git push -f https://$GITHUB_USER:$GITHUB_TOKEN@github.com/storefront-community/self-order-kiosk.git HEAD:gh-pages
