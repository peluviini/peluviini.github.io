
cp -rf ./backend/page/* ./docs

git add ./
git commit -m "Update docs with latest build"
git push origin master
