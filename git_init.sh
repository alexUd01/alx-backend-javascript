#!/usr/bin/env bash
# Initialize project repository

echo "# ALX-Backend-Javascript" >> README.md
git init
git add README.md
git commit -m "project initialization"
git branch -M master
git remote add origin git@github.com:alexUd01/alx-backend-javascript.git
git push -u origin master
