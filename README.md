meteor-bootstrap3-sass
======================

Meteor package for Bootstrap 3 with Sass support

To install
----------

In addition to the bootstrap3-sass package, you must explicitly install the scss package. Meteor will not compile your `*.scss` files otherwise.

```sh
$ mrt add bootstrap3-sass
$ mrt add scss
```

To use
------

To activate bootstrap styles on your site, add the following line to the top of your main scss file:

```scss
@import 'packages/bootstrap3-sass/bootstrap';
```

Be sure to add a viewport meta tag to your document `<head>` somewhere in your HTML. Where you add this is dependent on how your meteor project is structured.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

--------------------------------------------------------

If you find a bug or would like to see an improvement made, please [file an issue on GitHub](https://github.com/reywood/meteor-bootstrap3-sass/issues).
