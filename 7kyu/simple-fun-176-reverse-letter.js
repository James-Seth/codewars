///Describtion:
// Task

// Given a string str, reverse it and omit all non-alphabetic characters.
// Example

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".
// Input/Output

//     [input] string str

// A string consists of lowercase latin letters, digits and symbols.

//     [output] a string

//My Solution:
function reverseLetter(str) {
    let newString = str.replace(/[^a-zA-Z]/gi, "");
     return newString.split("").reverse().join("");
   }

//Other solutions:
reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');