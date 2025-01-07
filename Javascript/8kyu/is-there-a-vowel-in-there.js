//Describtion:
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

//My Solution:
function isVow(a){
    return a.map(code => {
      let char = String.fromCharCode(code);
      
      if(['a', 'e', 'i', 'o', 'u'].includes(char)){
        return char;
      }
      return code;
      })
    }

//Other solutions:
function isVow(a){
    for (var i=0, l=a.length; i<l; ++i)
    {
      var char = String.fromCharCode(a[i])
      if ('aeiou'.indexOf(char) !== -1)
      a[i] = char;
    }
    
    return a;
  }