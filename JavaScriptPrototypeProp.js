/**
 * Created with IntelliJ IDEA.
 * User: rayyas000
 * Date: 1/3/14
 * Time: 8:54 AM
 * To change this template use File | Settings | File Templates.
 */
var fs = require("fs");

function Player(){
    this.name;
    this.hitpoints = 100;
    this.attack = function attack(opponent){
        opponent.hitpoints -=10;
        console.log(this.name+ " just hit "+opponent.name);
    }
}

var p1 = new Player();
var p2 = new Player();

p1.name = "ramesh";
p2.name = "raja";

p1.attack(p2);
console.log(p2.name+" has "+ p2.hitpoints+ " hit points left");
console.log(p1.name+" has "+ p1.hitpoints+ " hit points left");


Player.prototype.heal = function heal123(targetPlayer){
    targetPlayer.hitpoints +=5;
};
//Make player1 heal player2

p1.heal(p2);
console.log(p2.name+" has "+ p2.hitpoints+ " hit points left");
console.log(p1.name+" has "+ p1.hitpoints+ " hit points left");
Player.prototype.change = 1000;


