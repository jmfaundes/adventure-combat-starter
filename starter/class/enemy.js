const {Character} = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    // Fill this in
    super(name, description, currentRoom);
    this.cooldown = 3000;
    this.attackTarget = null;
  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
    // Fill this in
    const exitKeys = Object.keys(this.currentRoom.exits);
    const randomKey = exitKeys[Math.floor(Math.random() * exitKeys.length)];
    this.currentRoom = this.currentRoom.exits[randomKey];
    this.cooldown += 1000;

  }

  takeSandwich() {
    // Fill this in
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function() {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    // Fill this in
    this.attackTarget.applyDamage(10);
    this.cooldown += 1000;
  }

  applyDamage(amount) {
    // Fill this in
  }



  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }

    // Fill this in
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }


}

//Test
// const { expect } = require('chai');

// const {Player} = require("./player.js");
// const {Room} = require("./room.js");
// const {Item} = require("./item.js");
// const {Food} = require("./food.js");

// const {World} = require("./world.js");

//const {Character} = require("../class/character.js");
//const {Enemy} = require("../class/enemy.js");

// let room = new Room("Test Room", "A test room");
// let item = new Item("rock", "just a simple rock");
// let sandwich = new Food("sandwich", "a delicious looking sandwich");
// let enemy = new Enemy('enemy', 'an ordinary character', room);
// let player = new Player("player", room);

// World.enemies.push(enemy);
// World.setPlayer(player);

// enemy.items.push(item);
// room.items.push(sandwich);

// let westRoom = new Room("West Room", "A room to the west of testRoom");
// room.connectRooms('w', westRoom);

// enemy.cooldown = 0;

// console.log(enemy.currentRoom);
// enemy.randomMove();
// console.log(enemy.currentRoom);

// console.log(World.enemies);
// console.log(enemy.attackTarget);
// player.hit('enemy');
// console.log(enemy.attackTarget);


module.exports = {
  Enemy,
};
