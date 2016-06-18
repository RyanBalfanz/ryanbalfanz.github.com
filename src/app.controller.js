"use strict";

module.exports = AppComponent;

function AppComponent($log) {
	"ngInject";
	var $ctrl = this;
	$ctrl.headline = "I'm Ryan Balfanz";
	this.$onInit = function() {
		$log.debug("AppComponent");
	}
}
