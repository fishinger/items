var http = require('http');

var srv = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "text/plan"});
	res.write("Hellow World");
	res.end();
});

srv.listen(8080);
console.log('Listen port 8080');