var http = require('http');
var fs = require('fs');
var server = http.createServer( function(request, response){
	console.log('Client request URL: ', request.url);
	if(request.url === '/'){
		fs.readFile('views/index.html', 'utf-8', function(errors, contents){
			response.writeHead(200, {'Content type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	if(request.url === '/stylesheets/index.css'){
		fs.readFile('stylesheets/index.css', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content type': 'text/css'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/cars.html'){
		fs.readFile('views/cars.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/stylesheets/cars.css'){
		fs.readFile('stylesheets/cars.css', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content type': 'text/css'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/cars/new'){
		fs.readFile('views/cars_new.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content type': 'text/html'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === '/images/car1.jpg'){
		fs.readFile('images/car1.jpg', function(errors, contents){
			response.writeHead(200, {'Content-type': 'image/jpg'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === '/images/car2.jpg'){
		fs.readFile('images/car2.jpg', function(errors, contents){
			response.writeHead(200, {'Content-type': 'image/jpg'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === '/images/car3.jpg'){
		fs.readFile('images/car3.jpg', function(errors, contents){
			response.writeHead(200, {'Content-type': 'image/jpg'});
			response.write(contents);
			response.end();
		})
	}	
	else if(request.url === '/cats.html'){
		fs.readFile('views/cats.html', 'utf8', function(errrors, contents){
			response.writeHead(200, {'Content type': 'text/html'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === '/stylesheets/cats.css'){
		fs.readFile('stylesheets/cats.css', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content type': 'text/css'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/images/cat1.jpg'){
		fs.readFile('images/cat1.jpg', function(errors, contents){
			response.writeHead(200, {'Content-type': 'image/jpg'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === '/images/cat2.jpg'){
		fs.readFile('images/cat2.jpg', function(errors, contents){
			response.writeHead(200, {'Content-type': 'image/jpg'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === '/images/cat3.jpg'){
		fs.readFile('images/cat3.jpg', function(errors, contents){
			response.writeHead(200, {'Content-type': 'image/jpg'});
			response.write(contents);
			response.end();
		})
	}
	else{
		response.writeHead(404);
		response.end('File not found');
	}	
});

server.listen(6789);
console.log('Admin: Joshua Rieland');