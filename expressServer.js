/**
 * Created with IntelliJ IDEA.
 * User: rayyas000
 * Date: 12/29/13
 * Time: 1:19 PM
 * To change this template use File | Settings | File Templates.
 */

var fs = require("fs");
var mDb = require("./MongoDbQry");
var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;

// express.createServer() is deprecated
//var express = require("express");
//var app = express.createServer();

var express = require("express");

var app = express();
app.use(app.router);

app.use(express.bodyParser());
app.use(express.errorHandler());

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.send("Hello Express");
});

app.listen(port, host, function () {
    console.log("Listening " + host + ":" + port);
});

app.get("/hello/:text", function (request, response) {
    response.send("hello " + request.params.text);
});

var users = JSON.parse(fs.readFileSync("user.json"));

var mDBObj = new mDb("from express");

app.get("/user/:uid", function (request, response) {
    var user = users[request.params.uid];
    if (user) {
        mDBObj.mongouser(request.params.uid,function(uInfo){
            // from JSON
            //response.send("<a href='http://comcast.com " + user.comcast + "'> Follow " + user.name + " on comcast </a>");
            // from mongoDB
            response.send("<a href='http://comcast.com " + uInfo.email + "'> Follow " + uInfo.name + " on comcast </a>");

        });
    } else {
        response.send("No user Found for the given UID:" + request.params.uid);
    }
});