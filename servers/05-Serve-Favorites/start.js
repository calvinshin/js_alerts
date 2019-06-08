var http = require("http");
var fs = require("fs");

var PORT = 3000;

function handleRequest(req, res) {

    function readPage(url) {
        fs.readFile(__dirname + url, function(err, data) {
            if (err) {
                readPage("/index.html");
            }
            else{
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        })
    }

    readPage(req.url);

}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("Listening on the PORT " + PORT);
})
