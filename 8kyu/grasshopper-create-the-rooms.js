//Describtion:
// Escape the room

// You are creating an "Escape the room" game. The first step is to create a hash table ( dict in Python) called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each room being a hash table with at least 3 properties (e.g. name, description, completed).

//My Solution:
var rooms = {
    room1:{
     name:'a', description:'b', completed:'c'},
    room2:{
     name:'a', description:'b', completed:'c'},
    room3:{
     name:'a', description:'b', completed:'c'}
   }
 
//Other solutions:
class Room  {
    constructor() {
      this.name = '';
      this.description = '';
      this.completed= '';
    }
  }
  var rooms = {
    bedroom : new Room(),
    kitchen : new Room(),
    bathroom : new Room(),
  }