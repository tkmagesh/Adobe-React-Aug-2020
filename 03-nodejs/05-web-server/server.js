const http = require('http'),
    fs = require('fs'),
    path = require('path');

const server = http.createServer((req, res) => {
    const resourceName = req.url;
    const resourceFullPath = path.join(__dirname, resourceName);
    if (!fs.existsSync(resourceFullPath)) {
        res.statusCode = 404;
        res.end();
        return;
    }
    const stream = fs.createReadStream(resourceFullPath);
    stream.on('data', chunk => res.write(chunk));
    stream.on('end', () => res.end());
});

server.listen(8080);
server.on('listening', () => {
    console.log('server listening on port 8080');
});
console.log('server started');
