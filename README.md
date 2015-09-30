meteor-bootstrap3-sass
======================

[![Build Status](https://travis-ci.org/englue/meteor-bootstrap3-sass.svg?branch=master)](https://travis-ci.org/englue/meteor-bootstrap3-sass)

Meteor package for Bootstrap 3 with Sass support

To install
----------

Install the `fourseven:scss` SCSS compiler package and the `reywood:bootstrap3-sass` package.

```sh
$ meteor add fourseven:scss
$ meteor add reywood:bootstrap3-sass
```

To use
------

To activate bootstrap styles on your site, add the following line to the top of your main scss file:

```scss
@import '{reywood:bootstrap3-sass}/bootstrap';
```

Be sure to add the appropriate tags (as [recommended by Bootstrap](http://getbootstrap.com/getting-started/#template)) to your document `<head>` somewhere in your HTML. Where you add these tags is dependent on how your meteor project is structured.

```html
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>
```

--------------------------------------------------------

If you find a bug or would like to see an improvement made, please [file an issue on GitHub](https://github.com/reywood/meteor-bootstrap3-sass/issues).
