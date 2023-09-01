//Description:
// Given a string, you have to return a string in which each 
// character (case-sensitive) is repeated once.
// Examples (Input -> Output):

// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// Good Luck!

//My Solution:
function doubleChar(str) {
    var newStr = "";
      for (var i = 0; i < str.length; i++) {
        newStr += str[i] + str[i];
      }
      return newStr;
    }

//Other Solutions:
const doubleChar = (str) => str.split("").map(c => c + c).join("");

//Another one:
function doubleChar(str) {
    return str.replace(/(.)/g, "$1$1")
  }