//Describtion:
// Time to test your basic knowledge in functions! Return the odds from a list:

// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []

//My Solution:
function odds(values){
    return values.filter( x => x % 2);
  }

//Other solutions:
const odds = values => values.filter(n => n % 2 !== 0);