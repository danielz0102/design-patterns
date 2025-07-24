import { Player } from "./Player";

const myPlayer = new Player();

myPlayer.move();
myPlayer.attack();
myPlayer.getDamage(50);

myPlayer.move();
myPlayer.attack();
myPlayer.getDamage(50);

myPlayer.attack();
myPlayer.move();
myPlayer.heal(30);
myPlayer.getDamage(30);

myPlayer.resuscitate();
myPlayer.move();
