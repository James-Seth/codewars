//Describtion:
// Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

//Solution:
function none(arr, fun){
    return !arr.some(fun)
   }

//Other solutions:
function none(arr, fun){
    for (var i = 0; i < arr.length; i++) {
      if (fun(arr[i]) == true) {
        return false;
      }
    } 
    return true;
  }