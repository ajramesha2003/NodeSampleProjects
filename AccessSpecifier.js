/**
 * Created with IntelliJ IDEA.
 * User: rayyas000
 * Date: 12/31/13
 * Time: 12:18 PM
 * To change this template use File | Settings | File Templates.
 */

var hello = "Hello World!!";

function helloWorldFunction(){
    return "HelloWorld Function";
}

function myPrivateFunction(number){
    return number + 10;
}

function increment(number){
    return myPrivateFunction(number);
}

module.exports.hello = hello;
module.exports.helloWorldFunc = helloWorldFunction;
module.exports.incrementFunc = increment;