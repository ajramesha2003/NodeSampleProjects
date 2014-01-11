/**
 * Created with IntelliJ IDEA.
 * User: rayyas000
 * Date: 1/3/14
 * Time: 11:09 AM
 * To change this template use File | Settings | File Templates.
 */
var fs = require("fs");

function ParentClass(){
    this.parent_prop1 = "Ramesh";
    this.parentmethod1 = function parentmethod(arg1){
        return arg1+" Parent method 1 return data....";
    }
}

function ChildClass(){
    this.child_prop1 = "Raja";
    this.childmethod1 = function childmethod(arg1){
        return arg1+" Child method 1 return data....";
    }
}

//Make the childclass inherit all of the Parent class characteristics
//by using the prototype property explained in depth here: http://www.youtube.com/watch?feature=player_detailpage&v=EBoUT2eBlT4

ChildClass.prototype = new ParentClass();
// Create a new instance of ChildClass
var instance1 = new ChildClass();
// check to see if instance1 is an instance of both objects

console.log("instance1 instanceof Parentclass: ", instance1 instanceof ParentClass);

console.log("instance1 instanceof ChildClass: ", instance1 instanceof ChildClass);

//Access the instance methods and properties


console.log("Access instance methods and prop", instance1.parentmethod1("Result"));
console.log("Access instance methods and prop", instance1.childmethod1("Result"));

// Override parentmethod1 in the childclass
ChildClass.prototype.parentmethod1 = function parentmethod(arg1){
    return arg1+" I have overridden Parent method 1";
}

console.log("Access instance methods and prop", instance1.parentmethod1("Result"));
console.log("Access instance methods and prop", instance1.childmethod1("Result"));

