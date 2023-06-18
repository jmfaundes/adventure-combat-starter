const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');
const {World} = require("./world.js");

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
    this.items = [];
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    // Fill this in
    let itemsList = this.currentRoom.items;
    for(let i = 0; i < itemsList.length; i++){
      if(itemsList[i].name === itemName){
        let item = itemsList.splice(i, 1);
        this.items.push(item[0]);
      }
    }
  }

  dropItem(itemName) {
    // Fill this in
    let itemsList = this.items;
    for(let i = 0; i < itemsList.length; i++){
      if(itemsList[i].name === itemName){
        let item = itemsList.splice(i, 1);
        this.currentRoom.items.push(item[0]);
      }
    }
  }

  eatItem(itemName) {
    // Fill this in
    let itemsList = this.items;
    for(let i = 0; i < itemsList.length; i++){
      if(itemsList[i].name === itemName && itemsList[i] instanceof Food){
        itemsList.splice(i, 1);
      }
    }

  }

  getItemByName(name) {
    // Fill this in
    let item;
    let itemsList = this.items;
    for(let i = 0; i < itemsList.length; i++){
      if(itemsList[i].name === name){
        item = itemsList[i];
        return item;
      }
    }
  }

  hit(name) {
    // Fill this in
    let enemiesList = World.enemies;
    for(let i = 0; i < enemiesList.length; i++){
      if(enemiesList[i].name === name){
        enemiesList[i].attackTarget = this;
      }
    }
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
