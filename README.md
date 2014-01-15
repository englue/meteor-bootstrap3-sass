meteor-bootstrap3-sass
======================

Meteor package for Bootstrap 3 with Sass support

To install
----------

```sh
$ mrt add bootstrap3-sass
```

To use
------

To activate bootstrap styles on your site, add the following line to the top of your main scss file:

```scss
@import 'packages/bootstrap3-sass/bootstrap';
```

Be sure to add a viewport meta tag somewhere in your HTML. Where you add this is dependent on how your meteor project is structured.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```