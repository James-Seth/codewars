//Describtion:
// Write a function that checks if a given string (case insensitive) is a
// palindrome. A palindrome is a word, number, phrase, or other sequence of 
// symbols that reads the same backwards as forwards, such as madam or 
// racecar, the date and time 12/21/33 12:21, and the
// sentence: "A man, a plan, a canal – Panama".

//My Solution
function isPalindrome(x) {    
    let input = x.toLowerCase()
    let y = input
    let p = input.split('').reverse().join('')
    if(p === y){
      return true
    }else{
      return false
    }
  }

//Other Solutions:
//Tenary operator
const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  }

//Another Solution:
function isPalindrome(x, str = x.toLowerCase()) {
    return str === [...str].reverse().join('')
  }