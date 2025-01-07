//Description;
// You are going to be given a word. Your job is to return the 
// middle character of the word. If the word's length is odd, 
// return the middle character. If the word's length is even, 
// return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

//My Solution:
function getMiddle(s)
{
  let textLength = s.length;
  
  if (textLength % 2 != 0){
    let x = (textLength - 1) / 2;
    return s.slice(x, x + 1)
    
  }else{
    let y = textLength / 2 - 1;
    return s.slice(y, y + 2);
    
  }
}

//Other solutions:
function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

//Another one:
function getMiddle(s) {
    var middle = s.length / 2;
    return (s.length % 2) 
      ? s.charAt(Math.floor(middle))
      : s.slice(middle - 1, middle + 1);
  }
