#!/bin/bash
set -e

REPO_URL=$(git config --get remote.origin.url)
PUBLISH_DIR="all/resources/public"

if [ ! -d "$PUBLISH_DIR" ]; then
  echo "Directory $PUBLISH_DIR does not exist. Run the build first."
  exit 1
fi

cd "$PUBLISH_DIR"
rm -fr .git
git init
git add .
git commit -m "Publish to gh-pages"
git push --force $REPO_URL main:gh-pages
rm -fr .git
echo "https://$(basename -s .git "$REPO_URL")/all/resources/public/"
