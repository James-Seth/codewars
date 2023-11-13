// Descritpion:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// My Solution:
function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
  }

// Other solutions:
function evenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    }
    else {
      return "Odd"
    }
  }

// Another one:
const evenOrOdd = (number) => number % 2 ? "Odd" : 'Even'; 