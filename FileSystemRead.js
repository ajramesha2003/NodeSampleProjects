/**
 * Created with IntelliJ IDEA.
 * User: rayyas000
 * Date: 12/30/13
 * Time: 2:47 PM
 * To change this template use File | Settings | File Templates.
 */

var fs = require("fs");
console.log("Starting");
fs.readFile("./files/sample.txt",function(error,data){
          console.log("Contents: "+ data);

});

var contents = fs.readFileSync("./files/sample.txt");
console.log("Contents from File Sync: "+ contents);
console.log("Carry on Executing")



var json_contents = fs.readFileSync("config.json");
console.log("json_contents from File Sync: "+ json_contents);
var parsed_contents = JSON.parse(json_contents);
console.log("HOST:: "+ parsed_contents.host);
