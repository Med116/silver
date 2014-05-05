module.exports = function(matches){
	var zm = require("zm").zm;
	var layout = require("./layout");
	var form = new zm.BaseTag().tag("form").setAttr("action","search").setAttr("method", "post")
		.addContent(new zm.InputText().setAttr("name","q"))
		.addContent(new zm.InputText().setAttr("name","state"))
		.addContent(new zm.InputText().setAttr("name","session").setAttr("value","20132014"))
		.addContent(new zm.InputText().setAttr("type","submit"))
 
	return layout("search title",form).print();
 
}