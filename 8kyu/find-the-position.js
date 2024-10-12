//Describtion:
// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"

// Note: Only lowercased English letters are tested

//My Solution:
function position(letter){
    const position = letter.charCodeAt(letter) - 96
    return `Position in alphabet: ${position}`
}

//Other solutions:
function position(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
  }