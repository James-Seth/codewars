//Describiton:
// Return the type of the sum of the two arguments

//My Solution:
function typeOfSum(a, b) {
    let sum = a + b;
    return typeof(sum);
}
//Other solutions:
typeOfSum = (a, b) => {
    return typeof(a + b)
}