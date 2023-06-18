const {Room} = require('./room');
const {Item} = require('./item');
//const {Player} = require('./player');
//const {Enemy} = require('./enemy');

class Character {

  constructor(name, description, currentRoom) {
    // Fill this in
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.items = [];
    this.health = 100;
    this.strength = 10;
  }

  applyDamage(amount) {
    // Fill this in
    this.health -= amount;
    if(this.health <= 0){
      this.die();
    }
    return;
  }

  die() {
    // Fill this in
    this.health = 0;
    while(this.items.length > 0) {
      this.currentRoom.items.push(this.items.pop());
    }
    this.currentRoom = null;
  }

}

//Test
// let room =  new Room("Test Room", "A test room");
// let item = new Item("rock", "just a simple rock");
// let character = new Character('Character', 'an ordinary character', room);
// character.items.push(item);
// console.log(character.items);
// console.log(character.name);
// console.log(character.description);
// //console.log('Is character an instance of Player? '+ (character instanceof Player));
// //console.log('Is character an instance of Enemy? '+ character instanceof Enemy);
// console.log(character.health);
// console.log(character.strength);
// character.applyDamage(10);
// console.log(character.health);
// console.log('Cuarto antes de morir ' + character.currentRoom);
// console.log('Cantidad de items en el cuarto antes de morir ' + room.items.length);
// character.die();
// console.log('Cuarto después de morir ' + character.currentRoom);
// console.log('Cantidad de items en el cuarto después de morir ' + room.items.length);
// console.log(room.items[0]);
// console.log(character.currentRoom);
// console.log(room.items.length);
// character.die();
// console.log(character.currentRoom);
// console.log(room.items.length);


module.exports = {
  Character,
};
