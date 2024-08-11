//Describtion:

//My Solution:
function solution(string) {
    return string.replace(/([A-Z][a-z])/g,' $1').replace(/(\d)/g,' $1')
  }

 //Other solutions:
 function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }
  
//Another one:
function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
  }