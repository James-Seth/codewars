//Describtion:
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

//My Solution:
function distinct(a) {
    return a.filter((v, index) => a.indexOf(v) === index)
  }

//Other solutions:
function distinct(a) {
    return [...new Set(a)];
  }