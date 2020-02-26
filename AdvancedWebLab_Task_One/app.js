
var http = require('http');
var fs = require('fs');

var requestHandler = function(request, response){

	//console.log(request.url);
	//console.log(request.method);
	/*response.writeHead(200, {'content-type': 'text/plain'});
	response.write('<h1>welcome to node http server!</h1>');
	response.end();*/

	if(request.url == "/home"){
		var data = fs.readFileSync('home.html');
		response.write(data.toString());
		response.end();
	}else if(request.url == '/login'){
		//response.write('Login page');
		//response.end();

		var data = fs.readFileSync('login.html');
		response.write(data.toString());
		response.end();

	}
	else if(request.url == '/reg'){
		//response.write('Login page');
		//response.end();

		var data = fs.readFileSync('reg.html');
		response.write(data.toString());
		response.end();

	}
	else if(request.url == '/'){
		//response.write('Login page');
		//response.end();

		var data = fs.readFileSync('index.html');
		response.write(data.toString());
		response.end();

	}else{
		response.write('Opps! Invalid request!');
		response.end();
	}
};

var server = http.createServer(requestHandler);
server.listen(3000);
console.log('server started at port 3000');