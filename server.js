var http = require("http");
var fs = require("fs");
console.log("Starting");
//var host = "127.0.0.1";
//var port = "1339";
var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;
// var restify = require('restify');
var server = http.createServer(function (req, res) {

    fs.readFile('./public' + req.url, function (err, data) {

        if (err) {
            console.log("Error Received Request:" + req.url);
            res.writeHead(404, {"Content-type": "text/plain"});
            res.end("Sorry Error occurred!");
        } else {
            console.log("Received Request:" + req.url);
            res.writeHead(200, {"Content-type": "text/html"});
            res.end(data);
        }

    })
});

server.listen(port, host, function () {
    console.log("Listening " + host + ":" + port);
});

fs.watchFile("config.json", function () {
    config = JSON.parse(fs.readFileSync("config.json"));
    host = config.host;
    port = config.port;
    if (server != undefined) {
        console.log("Closing Server...");
        server.close(function (e) {
            if (e) {
                throw 'Error on closing server';
            } else {
                console.log("Server closed");
            }
        });
    }
    server.listen(port, host, function () {
        console.log("Now Listening " + host + ":" + port);
    });
});