//Describtion:
// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

//My Solution:
function parseF(s) {
    return (Number.isNaN(parseFloat(s)) ? null : parseFloat(s));
  }

//Other solutions:
function parseF(s) {
    return isNaN(parseFloat(s)) ? null : parseFloat(s);
  }