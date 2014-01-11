var cluster = require('cluster');
var http = require('http');
var numReqs = 0;
var worker;

if (cluster.isMaster) {
    // Fork workers.
    for (var i = 0; i < 2; i++) {
        worker = cluster.fork();

        worker.on('message', function(msg) {
            // we only want to intercept messages that have a chat property
            if (msg.chat) {
                console.log('Worker to master: ', msg.chat);
                worker.send({ chat: 'Ok worker, Master got the message! Over and out!' });
            }
        });

    }
} else {
    process.on('message', function(msg) {
        // we only want to intercept messages that have a chat property
        if (msg.chat) {
            console.log('Master to worker: ', msg.chat);
        }
    });
    // Worker processes have a http server.
    http.Server(function(req, res) {
        res.writeHead(200);
        res.end("hello world\n");
        // Send message to master process
        process.send({ chat: 'Hey master, I got a new request!' });
    }).listen(8000);
}