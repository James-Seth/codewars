//Describtion:

//my Solution:
function between(a, b) {
    return Array.from(new Array(b - a + 1), x => a++)
  }

//Other solutions:
function between(a, b) {
    // your code here
    arr = []
    for(i = a;i <= b; i++){ 
        arr.push(i)
    }
    return arr
  } 