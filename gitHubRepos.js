/**
 * Created with IntelliJ IDEA.
 * User: rayyas000
 * Date: 12/29/13
 * Time: 4:57 PM
 * To change this template use File | Settings | File Templates.
 */

//var privateKey = fs.readFileSync('sslcert/server.key', 'utf8');
//var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');
//
//var credentials = {key: privateKey, cert: certificate};
//var express = require('express');
//var app = express();
//
//// your express configuration here
//
//var httpServer = http.createServer(app);
//var httpsServer = https.createServer(credentials, app);
//
//httpServer.listen(80);
//httpsServer.listen(443);

//
//
//var express = require('express'),
//    http = require('http'),
//    https = require('https');

var https = require('https');

function getRepos(username, callback) {
    var options = {
        host: 'api.github.com',
        path: '/users/' + username + '/repos',
        headers: {'user-agent': 'Node.js'},
        method: 'GET'
    };

    var request = https.request(options, function (resp) {
        var body = '';
        resp.on("data", function (chunk) {
            body += chunk.toString('utf8');
        });

        resp.on("end", function () {
            var repos = [];
            var json = JSON.parse(body);
            json.forEach(function (repo) {
                repos.push({
                    name: repo.name,
                    desc: repo.description
                });
            });
            console.log("Body", body);
            console.log("Count:", json.length);
            console.log("Repos", repos);
            callback(repos);
        });
    });
    request.end();
}

getRepos("samirkb",function(cb){
    console.log("OutPut:: "+ cb.length);
})



