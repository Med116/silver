// hello.js
module.exports = function(matches, requestParams){
	 var layout=require('../../layouts/layout.js');
	 var zm = require('zm').zm;
	 // contentObj is sent to the layout, and it will get injected into the 'main' 
	  // div , as a default. You can modify layout.js to take advantage of this , and add more content areas;
	 var contentObj = {};
	 contentObj.main = new zm.P('hello from ' + module );
	 console.log("HELLO THERE");

	 return layout('title', contentObj);
}