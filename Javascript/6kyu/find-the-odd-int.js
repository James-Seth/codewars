//Describtion:

//My Solution:
function findOdd(A) {
    return A.reduce((a,b) => a ^ b)
  }

//Other solutions:
function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
  }

//Another one:
function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1;
    });
    
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
  }