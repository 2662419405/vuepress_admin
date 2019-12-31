#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m ':apple:脚本持续集成'
git push -f git@github.com:2662419405/vuepress.git master:gh-pages

cd -