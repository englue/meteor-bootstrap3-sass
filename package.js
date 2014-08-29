Package.describe({
	name: "reywood:bootstrap3-sass",
	summary: "Bootstrap 3 with Sass support",
	version: "3.1.6",
	git: "https://github.com/englue/meteor-bootstrap3-sass.git"
});

Package.onUse(function (api) {
	api.versionsFrom("METEOR@0.9.0");

	api.use("jquery");
	api.use("fourseven:scss@0.9.5", ["server"]);
	api.imply("fourseven:scss", ["server"]);

	api.addFiles([
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

	api.addFiles([
		"assets/fonts/bootstrap/glyphicons-halflings-regular.eot",
		"assets/fonts/bootstrap/glyphicons-halflings-regular.svg",
		"assets/fonts/bootstrap/glyphicons-halflings-regular.ttf",
		"assets/fonts/bootstrap/glyphicons-halflings-regular.woff"
	], "client");

	api.addFiles([
		"_bootstrap.scss",
		"assets/stylesheets/bootstrap/_alerts.scss",
		"assets/stylesheets/bootstrap/_badges.scss",
		"assets/stylesheets/bootstrap/_breadcrumbs.scss",
		"assets/stylesheets/bootstrap/_button-groups.scss",
		"assets/stylesheets/bootstrap/_buttons.scss",
		"assets/stylesheets/bootstrap/_carousel.scss",
		"assets/stylesheets/bootstrap/_close.scss",
		"assets/stylesheets/bootstrap/_code.scss",
		"assets/stylesheets/bootstrap/_component-animations.scss",
		"assets/stylesheets/bootstrap/_dropdowns.scss",
		"assets/stylesheets/bootstrap/_forms.scss",
		"assets/stylesheets/bootstrap/_glyphicons.scss",
		"assets/stylesheets/bootstrap/_grid.scss",
		"assets/stylesheets/bootstrap/_input-groups.scss",
		"assets/stylesheets/bootstrap/_jumbotron.scss",
		"assets/stylesheets/bootstrap/_labels.scss",
		"assets/stylesheets/bootstrap/_list-group.scss",
		"assets/stylesheets/bootstrap/_media.scss",
		"assets/stylesheets/bootstrap/_mixins.scss",
		"assets/stylesheets/bootstrap/_modals.scss",
		"assets/stylesheets/bootstrap/_navbar.scss",
		"assets/stylesheets/bootstrap/_navs.scss",
		"assets/stylesheets/bootstrap/_normalize.scss",
		"assets/stylesheets/bootstrap/_pager.scss",
		"assets/stylesheets/bootstrap/_pagination.scss",
		"assets/stylesheets/bootstrap/_panels.scss",
		"assets/stylesheets/bootstrap/_popovers.scss",
		"assets/stylesheets/bootstrap/_print.scss",
		"assets/stylesheets/bootstrap/_progress-bars.scss",
		"assets/stylesheets/bootstrap/_responsive-utilities.scss",
		"assets/stylesheets/bootstrap/_scaffolding.scss",
		"assets/stylesheets/bootstrap/_tables.scss",
		"assets/stylesheets/bootstrap/_theme.scss",
		"assets/stylesheets/bootstrap/_thumbnails.scss",
		"assets/stylesheets/bootstrap/_tooltip.scss",
		"assets/stylesheets/bootstrap/_type.scss",
		"assets/stylesheets/bootstrap/_utilities.scss",
		"assets/stylesheets/bootstrap/_variables.scss",
		"assets/stylesheets/bootstrap/_wells.scss"
	], "server");
});

Package.onTest(function(api) {
	api.use("reywood:bootstrap3-sass");
	api.use(["fourseven:scss", "tinytest", "test-helpers"]);

	api.addFiles([
			"tests.scss",
			"tests.js"
		], "client");
});
