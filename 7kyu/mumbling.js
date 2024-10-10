//Describtion:

//My Solution:
function accum(s){
    return s.split('').map((x, i) => (x.toLowerCase() + x.toLowerCase().repeat(i))).join('-')
}
//Other solutions:
function accum (s) {
	return [...s].map((element, index) => {
    return element.toUpperCase() + element.toLowerCase().repeat(index);
  }).join('-');
}