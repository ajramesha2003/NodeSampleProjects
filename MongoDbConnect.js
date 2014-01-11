/**
 * Created with IntelliJ IDEA.
 * User: rayyas000
 * Date: 1/2/14
 * Time: 3:20 PM
 * To change this template use File | Settings | File Templates.
 */

var mongo = require("mongodb");
var fs = require("fs");
var host = "127.0.0.1";
var port = mongo.Connection.DEFAULT_PORT;
var db = new mongo.Db("nodejs-intro",new mongo.Server(host,port,{}));
db.open(function(error){
   console.log("We are Connected!" + host + ":" + port);
   db.collection("user",function(error,collection){
       console.log("We have the collection!!");
       collection.insert({
           id:"1",
           name: "AJ Ramesh",
           comcast: "rayyas000",
           email:"ajr@comcast.com"
       },function(){
           console.log("Successfully Inserted AJ Ramesh");
       });

       collection.insert({
           id:"3",
           name: "Raja",
           comcast: "raja000",
           email:"raja@comcast.com"
       },function(){
           console.log("Successfully Inserted Raja");
       });

//       collection.insert(JSON.parse(fs.readFileSync("user.json")),function(){
//           console.log("Success!!")
//       });
   });
});



