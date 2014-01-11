/**
 * Created with IntelliJ IDEA.
 * User: rayyas000
 * Date: 1/3/14
 * Time: 12:32 PM
 * To change this template use File | Settings | File Templates.
 */

var fs = require("fs");

function exampleClass(){
    this.property1 = 5;
    this.property2 = "World";
    this.method1 = function method1(arg1){
        return arg1+" "+this.property2;
    }
}

exampleClass.prototype.ilovu = function(){
         return "i love you";
}


module.exports = exampleClass;
