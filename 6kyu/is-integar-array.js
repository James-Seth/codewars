//Describtion:
// Write a function with the signature shown below:

// function isIntArray(arr) {
//   return true
// }

//     returns true  / True if every element in an array is an integer or a float with no decimals.
//     returns true  / True if array is empty.
//     returns false / False for every other input.

//My Solution:
function isIntArray(arr) {
    return Array.isArray(arr) && arr.every(function (x) { return Math.floor(x) === x });
  }

//Other solutions:
let isIntArray = arr => !!arr && arr.every(Number.isInteger);

//Another one:
function isIntArray(arr) {
    if(!Array.isArray(arr))return false;
    for(i=0;i<arr.length;i++){
      if(!Number.isInteger(arr[i]))return false;
    }
    return true;
  }