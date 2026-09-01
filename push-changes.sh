#!/bin/bash

git checkout --orphan tmp-main
git add -A
git commit -m "Update"
git branch -D main
git branch -m main
git push -f origin main

read -p "Press a key"
