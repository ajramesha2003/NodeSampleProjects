/**
 * Created with IntelliJ IDEA.
 * User: rayyas000
 * Date: 12/30/13
 * Time: 4:08 PM
 * To change this template use File | Settings | File Templates.
 */

var fs = require("fs");
console.log("Started");
var config = JSON.parse(fs.readFileSync("config.json"));
console.log("Intial Config: ", config);

fs.watchFile("config.json", function(current,previous){
    console.log("Config changed");
    config = JSON.parse(fs.readFileSync("config.json"));
    console.log("New config file:",config);
});
