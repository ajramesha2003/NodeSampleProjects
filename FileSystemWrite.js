/**
 * Created with IntelliJ IDEA.
 * User: rayyas000
 * Date: 12/30/13
 * Time: 3:51 PM
 * To change this template use File | Settings | File Templates.
 */
var fs = require("fs");
console.log("Starting");
fs.writeFile("./files/write_non_sync.txt","Hi Hello How are you!!", function(){
    console.log("File write is done!")
});

fs.writeFileSync("./files/write_sync.txt","Hello How are you!!");

console.log("Done!");

