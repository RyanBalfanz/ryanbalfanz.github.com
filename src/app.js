"use strict";

var templateUrl = require('./app.component.html');

angular.module("app",[
		"ngComponentRouter",
		"links",
	])
	.config(function($locationProvider) {
		$locationProvider.html5Mode(true);
	})
	.value('$routerRootComponent', 'app')
	.component("app", {
		templateUrl: templateUrl,
		$routeConfig: [{
			path: '/',
			name: 'Links',
			component: 'linkList',
			useAsDefault: true
		}],
		controller: require("./app.controller.js"),
	});

require("./links");
