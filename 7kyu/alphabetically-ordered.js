//Describtion:
// Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.
// Examples (input -> output)

//     "kata" -> false ('a' comes after 'k')
//     "ant" -> true (all characters are in alphabetical order)

// Good luck :)

//My Solution:
function alphabetic(s){
    return s == s.split('').sort().join('')
}

//Other solutions:
const alphabetic = s => s === s.split('').sort().join('');

//Another one:
function alphabetic(s) {
    for (let i = 1; i < s.length; i++) {
      if (s[i] < s[i - 1]) {
        // If the current character is less than the previous character, the string is not in alphabetical order
        return false;
      }
    }
    // If we make it through the loop without finding a pair of characters that are out of order, the string is in alphabetical order
    return true;
  
  }