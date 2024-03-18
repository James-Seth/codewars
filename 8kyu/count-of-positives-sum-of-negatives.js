//Decribtion:
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//My Solution:
function countPositivesSumNegatives(input){
    if(input == null || input.length < 1){
      return [];
    }
    
    var newArray = [0, 0];
    
    for(var i = 0; i < input.length; i++){
      if(input[i] > 0)
        {
        newArray[0] += 1;
        }else {
        newArray[1] += input[i];
        }
      }
    return newArray;
    }

//Other solutions:
function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}
