//login_view.js

module.exports = function(matches){

	var zm = require("zm").zm;
	var layout = require("./layout");

	var generateInputWithLabel = function(label,input){
		return new zm.Div(zm.Span(label)).akon(input);
	}
	var form = new zm.Form("/login/","POST");
	var username = generateInputWithLabel("username:", new zm.InputText().setAttr("name","username"));
	var password = generateInputWithLabel("password:", new zm.InputText().setAttr("name","password"));

	

	form.akon(username).akon(password).akon(new zm.BaseTag()
												.tag("input")
												.setAttr("type","submit")
												.setAttr("value","login")
												);
	var contentObject = {};
	contentObject.main = form;


	return layout("login_form", contentObject);

}



