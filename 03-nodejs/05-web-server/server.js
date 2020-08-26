const http = require('http'),
    fs = require('fs'),
    path = require('path'),
    url = require('url'),
    chalk = require('chalk');

const server = http.createServer((req, res) => {
    const resourceUrl = req.url === '/' ? 'index.html' : req.url ;
    const urlObj = url.parse(resourceUrl);
    const resourceFullPath = path.join(__dirname, urlObj.pathname);
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
    console.log(chalk.cyan('server listening on port 8080'));
});
console.log(chalk.red('server started'));
