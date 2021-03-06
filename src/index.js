require('dotenv').config();
const http = require('http');

const port = parseInt(process.env.PORT, 10) || 5000;
const name = process.env.MYNAME || "Matthew"

http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    response.write('Hello, ' + name + '!');

    response.end();

}).listen(port);
