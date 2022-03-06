#!/usr/bin/env sh


#   Config
#   *   *   *   *   *   *   *   *   *   *   *

#   abort on errors
set -e


#   Build app
#   *   *   *   *   *   *   *   *   *   *   *

#   delete prev build
rm -rf dist/

#   build
npm run build


#   Create commit
#   *   *   *   *   *   *   *   *   *   *   *

git add -A
git commit -m 'deploy'


#   Push commit
#   *   *   *   *   *   *   *   *   *   *   *

#   push
git push origin dist


#   After deploy
#   *   *   *   *   *   *   *   *   *   *   *

#   log success
echo 'Deploy completed successfully!'