//Descrition:
// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

//My Solution:
function mergeArrays(a, b) {
    return [...new Set(a.concat(b))].sort((a,b)=>a-b);
  }

//Other solutions:
function mergeArrays(a, b) {
    let merge = [...a, ...b].sort()
    let unique = new Set(merge)
    return Array.from(unique).sort((a,b)=> a-b)
}

//Another one:
function mergeArrays(a, b) {
    return [...a,...b].sort((a,b)=> a - b).filter ((elem,i,x)=> i == x.indexOf(elem))
   }