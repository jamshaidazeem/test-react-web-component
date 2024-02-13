# predeploy.sh

# remove the version hash from our base javascript file for a stable URL using copy
find build/static/js -name "main.*.js" -exec cp '{}' build/static/js/main.js \;

# remove the version hash from our base javascript file for a stable URL using mov
# find build/static/js -name "main.*.js" -exec mv '{}' build/static/js/main.js \;