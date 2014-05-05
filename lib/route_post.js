module.exports = function(req,res, postArray){
	var url = require('url');
	var RouteRegex = require("./route_regex.js");
	var router = new RouteRegex();
	router.addRoute("^/login/$", require("./login.js"));
	router.run(req,res,postArray);
 
}