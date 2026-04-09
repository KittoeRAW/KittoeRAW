#!/bin/bash
set -e

echo 'Building project...'
npm run build

echo 'Adding 404.html fallback...'
cp dist/index.html dist/404.html

echo 'Switching to gh-pages branch...'
git checkout gh-pages

echo 'Copying built files...'
cp -r dist/* .

echo 'Committing changes...'
git add .
git commit -m "Deploy site $(date +'%Y-%m-%d %H:%M:%S')" || echo 'No 
changes to commit'

echo 'Pushing to gh-pages...'
git push origin gh-pages --force

echo 'Switching back to main branch...'
git checkout main

echo '✅ Deployment complete!'
