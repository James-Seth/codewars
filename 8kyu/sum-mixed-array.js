//Describtion:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//My Solution: 
const sumMix = x => x.map(Number).reduce((acc,c)=> acc + c, 0)

//Other Solutions:
function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }

//Another One:
function sumMix(x){
    let result = 0;
    for (let n of x) {
      result += parseInt(n);
    }
    return result;
  }