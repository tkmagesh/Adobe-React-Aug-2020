const http = require('http'),
    fs = require('fs');

const server = http.createServer((req, res) => {
    const stream = fs.createReadStream('./index.html');
    stream.on('data', chunk => res.write(chunk));
    stream.on('end', () => res.end());
});

server.listen(8080);
server.on('listening', () => {
    console.log('server listening on port 8080');
});
console.log('server started');
