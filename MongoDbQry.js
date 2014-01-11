/**
 * Created with IntelliJ IDEA.
 * User: rayyas000
 * Date: 1/2/14
 * Time: 3:37 PM
 * To change this template use File | Settings | File Templates.
 */

//http://www.youtube.com/watch?v=R8mAjwKjmD8&list=PLw2e3dFxewkIS1YjkLcdCUI5BPBg_YMwD


var mongo = require("mongodb");
var fs = require("fs");
var host = "127.0.0.1";
var port = mongo.Connection.DEFAULT_PORT;

function mongoDB(val){
    console.log("Hi MongoDB "+ val);
}

mongoDB.prototype.mongouser = function getUser(id,callback){
    var db = new mongo.Db("nodejs-intro",new mongo.Server(host,port,{}));
    db.open(function(error){
        console.log("We are Connected!" + host + ":" + port);
        db.collection("user",function(error,collection){
            console.log("We have the collection :"+id);
            collection.find({id:id.toString()},function(error,cursor){
                cursor.toArray(function(error, users){
                    if(users.length == 0){
                        callback(false);
                    } else{
                        callback(users[0]);
                    }
                });
            });
        });
    });
}

module.exports = mongoDB;

//var mongoDBObj = new mongoDB("sameclass");
//
//mongoDBObj.mongouser(3,function(cb){
//   if(!cb){
//       console.log("No user found for ID: "+ 4);
//   }else{
//       console.log("Found a user",cb);
//   }
//});
