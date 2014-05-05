module.exports = function(){
	var url = require("url");

	return{
		"urls" : new Array(),
		"addRoute" : function(regex,func){
						this.urls.push([new RegExp(regex), func]);
					},
		"run": function(req,res, requestParams){
			this.urls.forEach(function(u){
				var matches = [];
				// we need just the base, not including query params
				var pathName = url.parse(req.url).pathname;
				if(matches = pathName.match(u[0])){
				// requestparams is of type postParse, an object containing post params, or get params
				res.end(u[1](matches,requestParams));
			}
			});
		}
	
	}
}