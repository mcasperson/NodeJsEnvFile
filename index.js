const http = require('http');

const port = parseInt(process.env.PORT) || 5000;
const name = process.env.NAME || "LogRocket"

http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    response.write('Hello, ' + name + '!');

    response.end();

}).listen(port);