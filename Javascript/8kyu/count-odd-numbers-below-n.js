//Describtion:
// Given a number n, return the number of positive odd numbers below n, EASY!
// Examples (Input -> Output)

// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

// Expect large Inputs!

//My Solution:
function oddCount(n){
    return Math.floor(n/2)
  }

//Other solutions:
function oddCount(n){
    let odd = Math.round((n - 1) / 2);
    return odd;
  }