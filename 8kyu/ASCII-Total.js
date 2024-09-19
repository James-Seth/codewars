//Describtion:
// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291

//My Solution:
function uniTotal (string) {
    let count = 0
    for(let i = 0; i < string.length; i++){
      count += string.charCodeAt(i)
      }
    return count 
    }

//Other solutions:
const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);