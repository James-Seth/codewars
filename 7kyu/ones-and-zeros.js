//Description:
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

// However, the arrays can have varying lengths, not just limited to 4.


//My Solution:
const binaryArrayToNumber = arr => {
    const binary = arr.join('');
    return parseInt(binary, 2);
  };

//Other Solutions:
//  Best practice
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

//Another one:
const binaryArrayToNumber = arr => {
    var num = 0;
    for (var i = 0, exponent = 3; i < arr.length; i++) {
      if (arr[i]) {
        num += Math.pow(2, exponent);
      }
      exponent--;
    }
    return num;
  };