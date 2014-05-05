var Zm = require("./lib/zm");
console.log(Zm);

var p = new Zm.P("this is my added content");

if(p.content_arr[0] == "this is my added content"){
	console.log("TEST PASSED");
}else{
	console.log("TEST FAILED");
}



console.log(p.print());


var div = new Zm.Div().akon(new Zm.Span("this is a span within a div"));
console.log(div.print());
