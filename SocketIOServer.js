/**
 * Created with IntelliJ IDEA.
 * User: rayyas000
 * Date: 1/7/14
 * Time: 4:36 PM
 * To change this template use File | Settings | File Templates.
 */

var fs = require('fs')

    , http = require('http')

    , socketio = require('socket.io');


var server = http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-type': 'text/html'});

    res.end(fs.readFileSync("./files/WebSocket.html"));

}).listen(8080, function () {

        console.log('Listening at: http://localhost:8080');

    });

socketio.listen(server).on('connection', function (socket) {

    socket.on('message', function (msg) {

        console.log('Message Received: ', msg);

        socket.broadcast.emit('message', msg);

    });

});