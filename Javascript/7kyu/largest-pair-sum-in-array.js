//Describtion:
// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

//My Solution:
function largestPairSum (numbers) {
    let sorted = numbers.sort((a, b) => a - b)
    return sorted[sorted.length - 1] + sorted[sorted.length - 2]
  }
  
//Other solutions:
function largestPairSum(numbers){
    numbers.sort(function(a, b){ return b - a });
    return numbers[0] + numbers[1];
  }