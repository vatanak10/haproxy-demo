var http = require('http');
var os = require('os');

http.createServer(function (req, res) {
    var networkInterfaces = os.networkInterfaces();
    var ip = networkInterfaces['eth0'][0].address;
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
        <h1>OS Uptime: ${os.uptime()}</h1>
        <h2>IP Address: ${ip}</h2>
        <h3>Pipeline Project</h3>
    `);
}).listen(8080);
