//Describtion:
// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

//my Solution:
function include(arr, item){
    return arr.includes(item)
}

//Other solutions:
function include(arr, item) {
    return arr.indexOf(item) !== -1;
  }