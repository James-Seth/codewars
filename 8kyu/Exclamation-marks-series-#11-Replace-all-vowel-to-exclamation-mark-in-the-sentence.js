//Describtion:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
// Examples

// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

//My Solution:
const replace = s => s.replace(/[aeiou]/gi, '!');

//Other solutions:
function replace(s){
    return s.replace(/[aeoiu]/ig, '!')  
  }

