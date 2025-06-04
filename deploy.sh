npm run build:prod
git stash
git checkout "release"
git stash pop
rm -rf src/ config/ css/ src/ pages/ styles/ *.ts package-lock.json package.json tsconfig.json webpack.config.ts 
mv build/* .
rm -rf build
git add .
git commit -m "deploy"
git push