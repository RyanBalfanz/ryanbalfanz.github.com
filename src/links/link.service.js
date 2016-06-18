"use strict";

module.exports = LinkService;

function LinkService($q) {
	"ngInject";
	var links = [{
		name: "Facebook",
		url: "https://www.facebook.com/ryanbalfanz",
		network: "facebook"
	}, {
		name: "Twitter",
		url: "https://twitter.com/ryanbalfanz",
		network: "twitter"
	}, {
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/ryanbalfanz",
		network: "linkedin"
	}, {
		name: "GitHub",
		url: "https://github.com/RyanBalfanz",
		network: "github"
	}];

	this.getLinks = function() {
		return $q.when(links);
	};
}
