"use strict";

var path = require("path");
var buildPath = path.resolve(__dirname, 'build');

module.exports = {
	module: {
		loaders: [{
			test: /\.html$/,
			loader: 'ngtemplate?relativeTo=' + __dirname + '/!html',
		}, {
			test: /\.js$/,
			loaders: ['ng-annotate']
		}, {
			test: /\.ts$/,
			loader: 'ts-loader'
		}]
	},
	entry: './src/app.js',
	output: {
		path: buildPath,
		filename: "[name].bundle.js",
	},
	externals: {
		angular: 'angular'
	}
};
