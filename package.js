Package.describe({
	name: 'reywood:bootstrap3-sass',
	summary: 'Bootstrap 3 with Sass support',
	version: '3.3.5_1',
	git: 'https://github.com/englue/meteor-bootstrap3-sass.git'
});

Package.onUse(function (api) {
	api.versionsFrom('METEOR@1.0');

	api.use('jquery');

	api.addFiles([
		'assets/javascripts/bootstrap.js'
	], 'client');

	api.addFiles([
		'assets/fonts/bootstrap/glyphicons-halflings-regular.eot',
		'assets/fonts/bootstrap/glyphicons-halflings-regular.svg',
		'assets/fonts/bootstrap/glyphicons-halflings-regular.ttf',
		'assets/fonts/bootstrap/glyphicons-halflings-regular.woff',
		'assets/fonts/bootstrap/glyphicons-halflings-regular.woff2'
	], 'client');

	api.addFiles([
		'_bootstrap.scss',
		'assets/stylesheets/bootstrap/_alerts.scss',
		'assets/stylesheets/bootstrap/_badges.scss',
		'assets/stylesheets/bootstrap/_breadcrumbs.scss',
		'assets/stylesheets/bootstrap/_button-groups.scss',
		'assets/stylesheets/bootstrap/_buttons.scss',
		'assets/stylesheets/bootstrap/_carousel.scss',
		'assets/stylesheets/bootstrap/_close.scss',
		'assets/stylesheets/bootstrap/_code.scss',
		'assets/stylesheets/bootstrap/_component-animations.scss',
		'assets/stylesheets/bootstrap/_dropdowns.scss',
		'assets/stylesheets/bootstrap/_forms.scss',
		'assets/stylesheets/bootstrap/_glyphicons.scss',
		'assets/stylesheets/bootstrap/_grid.scss',
		'assets/stylesheets/bootstrap/_input-groups.scss',
		'assets/stylesheets/bootstrap/_jumbotron.scss',
		'assets/stylesheets/bootstrap/_labels.scss',
		'assets/stylesheets/bootstrap/_list-group.scss',
		'assets/stylesheets/bootstrap/_media.scss',
		'assets/stylesheets/bootstrap/_mixins.scss',
		'assets/stylesheets/bootstrap/_modals.scss',
		'assets/stylesheets/bootstrap/_navbar.scss',
		'assets/stylesheets/bootstrap/_navs.scss',
		'assets/stylesheets/bootstrap/_normalize.scss',
		'assets/stylesheets/bootstrap/_pager.scss',
		'assets/stylesheets/bootstrap/_pagination.scss',
		'assets/stylesheets/bootstrap/_panels.scss',
		'assets/stylesheets/bootstrap/_popovers.scss',
		'assets/stylesheets/bootstrap/_print.scss',
		'assets/stylesheets/bootstrap/_progress-bars.scss',
		'assets/stylesheets/bootstrap/_responsive-embed.scss',
		'assets/stylesheets/bootstrap/_responsive-utilities.scss',
		'assets/stylesheets/bootstrap/_scaffolding.scss',
		'assets/stylesheets/bootstrap/_tables.scss',
		'assets/stylesheets/bootstrap/_theme.scss',
		'assets/stylesheets/bootstrap/_thumbnails.scss',
		'assets/stylesheets/bootstrap/_tooltip.scss',
		'assets/stylesheets/bootstrap/_type.scss',
		'assets/stylesheets/bootstrap/_utilities.scss',
		'assets/stylesheets/bootstrap/_variables.scss',
		'assets/stylesheets/bootstrap/_wells.scss',
		'assets/stylesheets/bootstrap/mixins/_alerts.scss',
		'assets/stylesheets/bootstrap/mixins/_background-variant.scss',
		'assets/stylesheets/bootstrap/mixins/_border-radius.scss',
		'assets/stylesheets/bootstrap/mixins/_buttons.scss',
		'assets/stylesheets/bootstrap/mixins/_center-block.scss',
		'assets/stylesheets/bootstrap/mixins/_clearfix.scss',
		'assets/stylesheets/bootstrap/mixins/_forms.scss',
		'assets/stylesheets/bootstrap/mixins/_gradients.scss',
		'assets/stylesheets/bootstrap/mixins/_grid-framework.scss',
		'assets/stylesheets/bootstrap/mixins/_grid.scss',
		'assets/stylesheets/bootstrap/mixins/_hide-text.scss',
		'assets/stylesheets/bootstrap/mixins/_image.scss',
		'assets/stylesheets/bootstrap/mixins/_labels.scss',
		'assets/stylesheets/bootstrap/mixins/_list-group.scss',
		'assets/stylesheets/bootstrap/mixins/_nav-divider.scss',
		'assets/stylesheets/bootstrap/mixins/_nav-vertical-align.scss',
		'assets/stylesheets/bootstrap/mixins/_opacity.scss',
		'assets/stylesheets/bootstrap/mixins/_pagination.scss',
		'assets/stylesheets/bootstrap/mixins/_panels.scss',
		'assets/stylesheets/bootstrap/mixins/_progress-bar.scss',
		'assets/stylesheets/bootstrap/mixins/_reset-filter.scss',
		'assets/stylesheets/bootstrap/mixins/_reset-text.scss',
		'assets/stylesheets/bootstrap/mixins/_resize.scss',
		'assets/stylesheets/bootstrap/mixins/_responsive-visibility.scss',
		'assets/stylesheets/bootstrap/mixins/_size.scss',
		'assets/stylesheets/bootstrap/mixins/_tab-focus.scss',
		'assets/stylesheets/bootstrap/mixins/_table-row.scss',
		'assets/stylesheets/bootstrap/mixins/_text-emphasis.scss',
		'assets/stylesheets/bootstrap/mixins/_text-overflow.scss',
		'assets/stylesheets/bootstrap/mixins/_vendor-prefixes.scss'
	], 'server');
});

Package.onTest(function(api) {
	api.use('reywood:bootstrap3-sass');
	api.use(['fourseven:scss', 'tinytest', 'test-helpers']);

	api.addFiles([
		'tests.scss',
		'tests.js'
	], 'client');
});
