//Describtion:
// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

//My Solution:
function factorial(n){ 
    if(n < 0 || n > 12){
      throw Error
    }else if(n < 1) {
      return 1
    }else{
      return n * factorial(--n)
    }   
  }

//Other solutions:
const factorial = n => n? factorial(n - 1) * n: 1;