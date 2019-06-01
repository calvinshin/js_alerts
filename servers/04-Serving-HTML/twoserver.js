var http = require("http");

var PORT1 = 8000;
var PORT2 = 3000;

function handleRequest1(request, response) {
    response.end("Working, on port " + request.url);
}

var server = http.createServer(handleRequest1)


server.listen(PORT1, function() {
    console.log("listening... press Ctrl+ Shift+ C to cancel" + PORT1);
})

// Checking http://localhost:8000/testthing, returned:
// Working, on port /testthing


function handleRequest2(request, response) {
    response.end("Be good to " + request.url);
}

var server2 = http.createServer(handleRequest2)


server2.listen(PORT2, function() {
    console.log("listening... press Ctrl+Shift+C to cancel " + PORT2)
})