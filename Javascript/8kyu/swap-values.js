//Describtion:
// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?

//My Solution:
function swapValues(args) {
    let temp = args[0];
    args[0] = args[1];
    args[1] = temp;
  }

//Other solutions:
function swapValues(args) {
    return arguments[0].reverse()
}
