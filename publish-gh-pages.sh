#!/bin/bash
set -e

REPO_URL=$(git config --get remote.origin.url)
PUBLISH_DIR="resources/public"

if [ ! -d "$PUBLISH_DIR" ]; then
  echo "Directory $PUBLISH_DIR does not exist. Run the build first."
  exit 1
fi

cd "$PUBLISH_DIR"
rm -fr .git
git init --initial-branch=gh-pages

# Use GITHUB_TOKEN for CI if available, otherwise use normal remote for local/manual
if [ -n "$GITHUB_TOKEN" ]; then
  echo "Using GITHUB_TOKEN for authentication"
  REPO_URL="https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
fi

git remote add origin "$REPO_URL"
git config user.name "github-actions[bot]"
git config user.email "github-actions[bot]@users.noreply.github.com"
touch .nojekyll
git add .
git commit -m "Publish to gh-pages"
git push --force origin HEAD:gh-pages
rm -fr .git

# Always use GITHUB_REPOSITORY if set, else extract from REPO_URL
if [ -n "$GITHUB_REPOSITORY" ]; then
  REPO_PATH="$GITHUB_REPOSITORY"
else
  REPO_PATH=$(echo "$REPO_URL" | sed -E 's#(git@github.com:|https://github.com/)##;s#\.git$##')
fi
OWNER=$(echo "$REPO_PATH" | cut -d'/' -f1)
REPO=$(echo "$REPO_PATH" | cut -d'/' -f2)
echo "https://${OWNER}.github.io/${REPO}/"
