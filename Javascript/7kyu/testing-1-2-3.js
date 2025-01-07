//Describtion:
// Your team is writing a fancy new text editor and 
// you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and 
// returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. 
// Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

//My Solution:
var number = function(array){
    if(array != []){
      for(let i = 0; i < array.length; i++){
        let prefix = `${i+1}: `;
        array[i] = prefix + array[i]
        
      }
      return array
    }
    return array
    }

//Other solutions:
var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  }

//Another one:
const number = array => array.map((n, i) => `${i + 1}: ${n}`);
