module.exports = function(matches, postParams){
	console.log(postParams);
	var layout = require("./layout.js");
	var zm = require("zm").zm;
	console.log("IN LOGIN.JS");
	var welcomeMsg = new zm.P().akon("Thanks for logging in " + postParams.username);
	var contentObject = {main:welcomeMsg};
	return layout("title",contentObject);
}