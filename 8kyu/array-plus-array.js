//Describtion:
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

//My Solution:
function arrayPlusArray(arr1, arr2) {
    let newArr = arr1.concat(arr2);
    return newArr.reduce((a, b) => a + b);
};

//Other Solution:
function arrayPlusArray(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    return arr.reduce((a, b) => a + b);
  }

//Another Solution:
function arrayPlusArray(arr1, arr2) {
    var suma=0;
    for(var i=0;i<arr1.length;i++)
      suma+=arr1[i];
    for(var i=0;i<arr2.length;i++)
      suma+=arr2[i];
    return suma;
  }