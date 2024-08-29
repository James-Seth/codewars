//Describtion:
// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

//My Solution:

//Using recursion
function digits(n) {
    if (parseInt(n / 10) === 0)
          return 1;
      return 1 + digits(parseInt(n / 10));
  }

//Other solutions:
function digits(n) {
    return n.toString().length;
  }