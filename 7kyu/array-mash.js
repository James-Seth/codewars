//Describtion:
// Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . Both arrays will always be the same length.

// eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']


//My Solution:
function arrayMash (...arrays) {
    const merge = [];
    for (let i = 0; i < Math.max(...arrays.map(a => a.length)); i++) {
      arrays.forEach((array) => {
        if (array[i] !== undefined) merge.push(array[i]);
      });
    }
    return merge;
  }

//Other solutions;
function arrayMash (array1, array2) {
    let newArr = [];
    for(let i=0; i<array1.length; i++) {
      newArr.push(array1[i], array2[i]);
     }
     return newArr;
 };

//Another one:
arrayMash = (a, b) => a.reduce((r, e, i) => r.concat(e).concat(b[i]), []);