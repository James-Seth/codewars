//Describtion:
// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

//My Solution:
function getNumberFromString(s) {  
    return +s.replace(/\D/g, '')
  }

//Other solutions:
const getNumberFromString = s => parseInt(s.match(/\d/g).join(''));