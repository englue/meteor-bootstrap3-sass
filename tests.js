Tinytest.add("bootstrap3-sass - SCSS variables should be available", function(test) {
	var onscreenDiv = OnscreenDiv(Meteor.render(function() {
		return '<div class="test-screen-xs-width"></div>';
	}));

	var styledDiv = onscreenDiv.div.firstChild;

	test.equal(getStyleProperty(styledDiv, "width"), "480px");

	onscreenDiv.kill();
});

Tinytest.add("bootstrap3-sass - SCSS class should be extendable", function(test) {
	var onscreenDiv = OnscreenDiv(Meteor.render(function() {
		return '<a class="test-btn-extended"></a>';
	}));

	var styledDiv = onscreenDiv.div.firstChild;

	test.equal(getStyleProperty(styledDiv, "display"), "inline-block");
	test.equal(getStyleProperty(styledDiv, "text-align"), "center");

	onscreenDiv.kill();
});

Tinytest.add("bootstrap3-sass - jQuery extensions should be loaded", function(test) {
	test.isTrue(typeof $.fn.affix !== 'undefined');
	test.isTrue(typeof $.fn.alert !== 'undefined');
	test.isTrue(typeof $.fn.button !== 'undefined');
	test.isTrue(typeof $.fn.carousel !== 'undefined');
	test.isTrue(typeof $.fn.collapse !== 'undefined');
	test.isTrue(typeof $.fn.dropdown !== 'undefined');
	test.isTrue(typeof $.fn.modal !== 'undefined');
	test.isTrue(typeof $.fn.popover !== 'undefined');
	test.isTrue(typeof $.fn.scrollspy !== 'undefined');
	test.isTrue(typeof $.fn.tab !== 'undefined');
	test.isTrue(typeof $.fn.tooltip !== 'undefined');
	test.isTrue(typeof $.fn.emulateTransitionEnd !== 'undefined');
});
