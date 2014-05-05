var http = require("http");
var zm = require("zm").zm;
console.log(zm);
var server = http.createServer(function(req,res){
	
	var html = new zm.H1().akon("hella pissah");
	html.setAttr("style","color:green");
	res.end(html.print());

}).listen(3000);
