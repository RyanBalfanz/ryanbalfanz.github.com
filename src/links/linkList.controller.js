"use strict";

module.exports = LinkListController;

function LinkListController($log, linkService) {
	"ngInject";
	var $ctrl = this;

	this.$onInt = function() {
		$log.debug("LinkListController");
	}
	this.$routerOnActivate = activate;

	function activate(next) {
		linkService.getLinks().then(function(links) {
			$ctrl.links = links;
		});
	}
}
