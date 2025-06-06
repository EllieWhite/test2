npm run build:prod
git checkout "release"
git merge main
rm -rf src/ config/ src/ pages/ styles/ *.ts package-lock.json package.json tsconfig.json webpack.config.ts 
mv build/* .
rm -rf build
git add .
git commit -m "deploy"
git push