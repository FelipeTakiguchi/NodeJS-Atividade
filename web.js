const http = require('http');
const fs = require('fs');
const hostname = "localhost";
const port = 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  console.log(request.url);
  response.setHeader("Content-Type", "text/plain");
  const nome = "Felipe Naoto";
  if(request.url == '/'){
    fs.readFile('index.html', function(err, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        return response.end();
    });
  } else if(request.url == '/sobre'){
    fs.readFile('about.html', function(err, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        return response.end();
    });
  } else if(request.url == '/contato/whatsapp') {
    fs.readFile('contact.html', function(err, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        return response.end();
    });
  } else {
      response.end('Error 404');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});