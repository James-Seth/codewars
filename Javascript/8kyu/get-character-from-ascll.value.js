//Describtion:
// Write a function which takes a number and returns the corresponding ASCII char for that value.

// Example:

// 65 --> 'A'
// 97 --> 'a'
// 48 --> '0

// For ASCII table, you can refer to http://www.asciitable.com/

//My Solution:
function getChar(c){
    return (String.fromCharCode(c))
  }

//Other solutions:
const getChar = String.fromCharCode;