//Describtion
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// Your function should only return a number, not the explanation about how you get that number.

//My Solution:
function getSum( a,b ) {
    if (a === b) {
      return a;
    } else {
      const min = Math.min(a, b);
      const max = Math.max(a, b);
      let sum = 0;
      for (let i = min; i <= max; i++) {
        sum += i
      }
      return sum;
   }
}

   //Other Solutions:
   const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
  }

  //Another One:
  function GetSum(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}