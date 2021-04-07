#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:wxyhaha/ebill-2-website.git &&
git push -u origin master -f &&
git remote add gitee git@gitee.com:joelW/ebill-2-website.git &&
git push -u gitee master -f
cd -


