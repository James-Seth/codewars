//Description:
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

//My Solution:
function high(x){
    let words = x.split(' ').map(x => [...x].reduce((a, b) => 
      a+b.charCodeAt(0) - 96, 0)
    );
    return x.split(' ')[words.indexOf(Math.max(...words))];
  }

//Other solutions:
function high(x){
  let alphabets = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  
  let words = x.split(" ");
  let highestScore = 0;
  let highestScoreWord = "";
  
  for (let word of words) {
    let lettersSum = 0;
    
    for (let letter of word) {
      lettersSum += alphabets.indexOf(letter) + 1;
    }
    
    if (lettersSum > highestScore) {
      highestScore = lettersSum;
      highestScoreWord = word;
    }
  }
  
  return highestScoreWord;
}
//Another one:
function high(x){
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    const words = x.split(' ')
    const scores = words.map(x => [...x].map(y => alpha.indexOf(y) + 1)).map(x => x.reduce((a,b) => a + b,0))
    
    return words[scores.indexOf(Math.max(...scores))]
  }