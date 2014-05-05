//post_parse, a module to get out the post params into an array

module.exports = function(reqStr){
	var arr = reqStr.split("&");
	var postObject ={};
	arr.forEach(function(keyVal){
		var keyValSplit = keyVal.split("=");
		var key = decodeURIComponent(keyValSplit[0]);
		var val = decodeURIComponent(keyValSplit[1]);
		postObject[key] = val;
	});

	return postObject;
}