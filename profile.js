module.exports= function(matches, requestParams){
	 //Your logic here
	 var layout=require('../layout.js')
	 var zm = require('zm').zm
	 // contentObj is sent to the layout, and it will get injected into the 'main' 
	  // div , as a default. You can modify layout.js to take advantage of this , and add more content areas
	 var contentObj = {}
	 contentObj.main = new zm.P('hello from ' + module );
	 return layout('title', contentObj).print()
}