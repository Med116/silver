module.exports = function(req,res){
	var url = require("url");
	var RouteRegex = require("./route_regex.js");
	var router = new RouteRegex();
	var fs = require("fs");
	var path = require("path");
	var os = require("os");
	var through = require("through");
	var layout = require("../layouts/layout.js");
	var qs = require("querystring");
 
	console.log(url.parse(req.url));

	var cssMatch = [];
	if(cssMatch = req.url.match(/\/(.+\.css$)/)){
		res.writeHead({"Content-Type":"text/css"});
		var cssFile = cssMatch[1];
		var pathToCss = "./static/css/" +  path.basename(cssFile);
		console.log(cssMatch);
		console.log("PATH TO CSS");
		console.log(pathToCss)
		var readable = fs.createReadStream(pathToCss);
		var cssStr = "";
		readable.on("data",function(chunk){
			cssStr += chunk.toString();
		});
		readable.on("end",function(){
			res.end(cssStr);
		});
	}
	router.addRoute("^/?$",function(){
		console.log("IN HOME ROUTE");
		var htmlString = "<b>Definition</b>:  immediately; also :  all at once :  consecutively <br> <em>French</em>";
		return layout("toute de suite default route", { "main": htmlString } );
	});

	fs.readFile("./routes/get.json", function(err,data){
	if (err){
		console.log(err);
	}else{
		for (var moduleName in json){
			console.log("MODULE " + moduleName);
			console.log("REGEX" + json[moduleName]);
			var moduleFunc = require("../routes/get/" +  moduleName + ".js");
			router.addRoute(json[moduleName],moduleFunc);
			
		}
		router.run(req,res);
		
	}
	});

}