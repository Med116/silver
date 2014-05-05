#!/usr/bin/env node
var fs = require("fs");
var method = process.argv[2];
var regex = process.argv[3];
var moduleArg = process.argv[4];


console.log("Building a " + method  + "  route' " + regex +  "' that requires the '" + moduleArg  + "' module" );
var js = "// " + moduleArg + ".js\n";
js += "module.exports= function(matches, requestParams){\n";
js += "\t var layout=require('../../layouts/layout.js');\n";
js += "\t var zm = require('zm').zm;\n";
js += "\t // contentObj is sent to the layout, and it will get injected into the 'main' \n\t  // div , as a default. You can modify layout.js to take advantage of this , and add more content areas;\n";
js += "\t var contentObj = {};\n";
js += "\t contentObj.main = new zm.P('hello from " + moduleArg + "');\n";
js += "\t return layout('title', contentObj);\n";
js += "}\n";

var routeFile = "routes/" + method + ".json"

fs.readFile(routeFile, function(err,data){
	var json = JSON.parse(data.toString());
	json[moduleArg] = regex.toString();
	fs.writeFile(routeFile, JSON.stringify(json,null,"\t"),  function(err){
		if(err) throw err;
		console.log("updated " + routeFile );
	})

});

fs.writeFile( "./routes/" + method + "/" + moduleArg + '.js', js, function (err) {
  if (err) throw err;
  console.log('module saved!');
});


