#!/usr/bin/env sh

if [ -d assets ]; then
	rm -rf assets
fi

cp -R bootstrap-sass/assets ./
# rm assets/stylesheets/bootstrap.scss
# rm assets/stylesheets/bootstrap/bootstrap.scss
