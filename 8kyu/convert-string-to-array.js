//Describtion:
// Write a function to split a string and convert it into an  array of words.
// Examples (Input ==> Output):

// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

//My Solution:
function stringToArray(string){
    const wordsSplit = string.split(' ')
    return wordsSplit
}      

//Other Solutions:
const stringToArray = string => string.split(' ');

