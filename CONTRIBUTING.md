## To upgrade to new version

```sh
$ cd bootstrap-sass
$ git fetch
$ git checkout v3.3.7 # use desired version number
$ cd ..
$ ./build-assets.sh
```

Edit `assets/stylesheets/bootstrap/_mixins.scss` and prepend `{reywood:bootstrap3-sass}/assets/stylesheets/bootstrap/` to all paths.

Copy imports from `assets/stylesheets/_bootstrap.scss` to root `_bootstrap.scss` and prepend `{reywood:bootstrap3-sass}/assets/stylesheets/` to all paths.

Add or remove calls to `api.addFiles` and `api.addAssets` in `package.js` as needed.

Make sure all tests are still passing. Run `meteor test-packages` from meteor app containing this package.

Update version in `package.js` to new version and append modifier number (e.g., `3.3.7_1`).

```sh
$ meteor publish
```
