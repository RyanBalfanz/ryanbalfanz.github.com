(function(){
	angular.module("app", [
		"ngComponentRouter",
		"links",
	])
	.config(function($locationProvider) {
		$locationProvider.html5Mode(true);
	})
	.value('$routerRootComponent', 'app')
	.component("app", {
		templateUrl: "app.component.html",
		$routeConfig: [
			{path: '/', name: 'Links', component: 'linkList', useAsDefault: true},
		],
		controller: AppComponent,
	});

	function AppComponent() {
		var $ctrl = this;
		$ctrl.headline = "I'm Ryan Balfanz";
	}
}());
