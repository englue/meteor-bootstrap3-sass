Package.describe({
	summary: "Bootstrap 3 with Sass support"
});

Package.on_use(function (api) {
	api.add_files([
		"assets/javascripts/bootstrap/affix.js",
		"assets/javascripts/bootstrap/alert.js",
		"assets/javascripts/bootstrap/button.js",
		"assets/javascripts/bootstrap/carousel.js",
		"assets/javascripts/bootstrap/collapse.js",
		"assets/javascripts/bootstrap/dropdown.js",
		"assets/javascripts/bootstrap/tab.js",
		"assets/javascripts/bootstrap/transition.js",
		"assets/javascripts/bootstrap/scrollspy.js",
		"assets/javascripts/bootstrap/modal.js",
		"assets/javascripts/bootstrap/tooltip.js",
		"assets/javascripts/bootstrap/popover.js"
	], "client");

	api.add_files([
		"assets/fonts/bootstrap/glyphicons-halflings-regular.eot",
		"assets/fonts/bootstrap/glyphicons-halflings-regular.svg",
		"assets/fonts/bootstrap/glyphicons-halflings-regular.ttf",
		"assets/fonts/bootstrap/glyphicons-halflings-regular.woff"
	], "client");
});

Package.on_test(function(api) {
	api.use("bootstrap3-sass");
	api.use(["scss", "tinytest", "test-helpers"]);

	api.add_files([
			"tests.scss",
			"tests.js"
		], "client");
});
