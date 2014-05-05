module.exports = function(title, contentObject){
	var zm = require("zm").zm;
	var html = new zm.BaseTag().tag("html");
	var head = new zm.BaseTag().tag("head");
	head.addContent(new zm.BaseTag().tag("link")
		.setAttr("href", "style.css")
		.setAttr("type", "text/css")
		.setAttr("rel","stylesheet"));
	html.addContent(head);
	var body = new zm.BaseTag().tag("body");
	body.addContent(exports.loginForm());
	body.akon(new zm.H1().akon("Tout de suite!")
		.addClass("white center"));
	// this is where content get injected into the layout
	body.akon(new zm.Div(contentObject.main)
		.setAttr("id","main"));		
	html.akon(body);
	return html.print();
}

exports.loginForm = function(){
	var zm = require("zm").zm;
	var generateInputWithLabel = function(label,input){
		return new zm.Div(zm.Span(label)).akon(input);
	}
	var form = new zm.Form("/login/","POST");
	form.addClass("login_form float_right");
	var username = generateInputWithLabel("username:", new zm.InputText().setAttr("name","username"));
	var password = generateInputWithLabel("password:", new zm.InputText().setAttr("name","password"));

	

	form.akon(username).akon(password).akon(new zm.BaseTag()
												.tag("input")
												.setAttr("type","submit")
												.setAttr("value","login")
												);

	return form;
}