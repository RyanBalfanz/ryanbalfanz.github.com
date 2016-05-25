(function(){
	angular.module("links", [])
		.service("linkService", LinkService)
		.component("links", {
			template: "<h2>Links</h2><ng-outlet></ng-outlet>",
			$routeConfig: [
				{path: '/',	name: 'LinkList',   component: 'linkLink', useAsDefault: true},
			],
		})
		.component("linkList", {
			templateUrl: "link-list.html",
			controller: LinkListComponent,
		});

	function LinkService($q) {
		var links = [
			{name: "Facebook", url: "https://www.facebook.com/ryanbalfanz", network: "facebook"},
			{name: "Twitter", url: "https://twitter.com/ryanbalfanz", network: "twitter"},
			{name: "LinkedIn", url: "https://www.linkedin.com/in/ryanbalfanz", network: "linkedin"},
			{name: "GitHub", url: "https://github.com/RyanBalfanz", network: "github"},
		];

		this.getLinks = function() {
			return $q.when(links);
		};
	}

	function LinkListComponent(linkService) {
		var $ctrl = this;

		this.$routerOnActivate = activate;

		function activate(next) {
			linkService.getLinks().then(function(links) {
				$ctrl.links = links;
			});
		}
	}
}());
