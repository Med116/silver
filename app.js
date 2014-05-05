//app.js
var server = require("./server.js");
var port = process.argv[2] ? process.argv[2] : 3003;
server(port);
