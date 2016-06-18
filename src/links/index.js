"use strict";

var templateUrl = require('./linkList.html');

angular.module("links", [])
	.service("linkService", require("./link.service.js"))
	.component("links", {
		$routeConfig: [{
			path: '/',
			name: 'LinkList',
			component: 'linkLink',
			useAsDefault: true
		}],
	})
	.component("linkList", {
		templateUrl: templateUrl,
		controller: require("./linkList.controller.js"),
	});
