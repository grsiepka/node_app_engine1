var http = require(http);
var timeout = 100000; //sleep 100 seconds

http.createServer(function (req, res) {
    if (req.url == '/') { //check url of the request
    
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        
        // Set reponse body
        res.write('Hello quick response bro');
        res.end();
    
    }
    else if (req.url == "/wait") {
        setTimeout((function() {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<html><body><p><h1> Hello this response took a while bro </h1></p></body></html>');
        }), timeout);

    }
    else
    res.end('Invalid Request bro!');
    

}).listen(8080);
console.log('Node.js Wait app running on port 8080..')