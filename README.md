meteor-bootstrap3-sass
======================

Meteor package for Bootstrap 3 with Sass support

**IMPORTANT UPDATE:** As of version 3.3.4_2, the `fourseven:scss` package is no longer automatically installed with this package. This allows projects to choose which SCSS compiler package they would like to use.

To install
----------

Select and install an SCSS compiler package. These include `fourseven:scss`, `stevezhu:sass`, etc. Then, install the `reywood:bootstrap3-sass` package.

```sh
$ meteor add fourseven:scss
$ meteor add reywood:bootstrap3-sass
```

To use
------

To activate bootstrap styles on your site, add the following line to the top of your main scss file:

```scss
@import '.meteor/local/build/programs/server/assets/packages/reywood_bootstrap3-sass/bootstrap';
```

Due to a current limitation of the Meteor packaging system, the above path may not exist the first time you run your Meteor app after installing this package. This will cause an error saying the file to import was not found. This may also occur if you run `meteor reset`. Restarting your app should fix this problem. See [meteor/meteor#2606](https://github.com/meteor/meteor/issues/2606) and [meteor/meteor#2796](https://github.com/meteor/meteor/issues/2796) for more info.

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
