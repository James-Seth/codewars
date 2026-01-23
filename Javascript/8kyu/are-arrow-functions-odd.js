//Describtion:
// Time to test your basic knowledge in functions! Return the odds from a list:

// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []

function odds(values) {
  return values.filter(x => x % 2 != 0)
}

//My Solution:
/**
 * Returns a new array containing only the odd numbers from the input array.
 * The original array is not modified.
 */
function odds(values){
    return values.filter( x => x % 2 !== 0);
  }

//Other solutions:
const odds = values => values.filter(n => n % 2 !== 0);