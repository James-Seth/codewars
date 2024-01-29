//Describtion:
// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

// Array's length > 2.

//My Solution:
function toCsvText(arr) {
    let csv = arr.map(function(x) {
   return x.join(",");
 }).join("\n");
 
    return(csv)
 }

//Other solutions:
function toCsvText(array) {
    return array.join('\n');
 }

//Another one:
const toCsvText = array => array.map(row => row.join(',')).join('\n');
