//Describtion:
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
// Examples

// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

//My Solution:
function powersOfTwo(n){
    let powers = []
    for (i = 0;i <= n; i++){
      let answer = 2**i
      powers.push(answer)
    }
    return powers 
  }

//Other solutions:
function powersOfTwo(n) {
    return Array.from({length: n + 1}, (v, k) => 2 ** k);
  }

//Another one:
function powersOfTwo(n){
    var result = [];
    for (var i = 0; i <= n; i++) {
      result.push(Math.pow(2, i));
    }
    return result;
  }