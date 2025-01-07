//Description:
// You are given an odd-length array of integers, in which all of them are 
// the same, except for one single number.

// Complete the method which accepts such an array, and returns that single 
// different number.

// The input array will always be valid! (odd-length >= 3)
// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

//My Solution:
function stray(numbers) {
    let strayChar = numbers[0];
    
    if (strayChar !== numbers[1] && strayChar !== numbers[2]) return strayChar;
    
     for(let i = 1; i < numbers.length; i++){
      if(strayChar !== numbers[i]){
      return numbers[i];
       }
     }
} 

//Other Solutions:
const stray = nums => nums.reduce((a, b) => a ^ b);

//Another one:
function stray(numbers){
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
  }
