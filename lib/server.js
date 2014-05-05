
module.exports = function(port){
	var http = require("http");
	var postParse = require("./post_parse.js");
	var routeGet = require("./route_get.js");
	var routePost = require("./route_post.js");
	 
	if(!port){
		console.log("pass in a port as first arg");
		process.exit(0);
	}
	var server = http.createServer(function(req,res){
	 
		if(req.method == "POST"){
			var str = "";
			req.on("data",function(chunk){
				str += chunk.toString();
			});
			req.on("end",function(){
				if(str){
					var postArray = postParse(str);
					routePost(req,res,postArray);
				}else{
					console.log("nothing was posted");
					res.end("nothing was posted");
				}
			});
		}else if(req.method == "GET"){
			routeGet(req,res);
		}else{
			res.end("PUT DELETE NOT DEFINED YET");
		}
	 
	 
	}).listen(port, function(){
		console.log("started server on port " + port  );
	});
}

