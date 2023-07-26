<<<<<<< HEAD
//Description:
// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

//My Solution:
unction otherAngle(a, b) {
    let third = 180 - (a+b)
    return third
 }

//Other Solutions:
const otherAngle = (a, b) => 180 - a - b

//Another Solution:
function otherAngle(a, b) {
    if(a<0 || b<0) //ensure no negative angles
      return 0;
    if((a+b)>=180) //ensure 2 angles don't sum up to 180
      return 0;
    return 180 - a - b; //return missing angle
=======
//Description:
// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

//My Solution:
unction otherAngle(a, b) {
    let third = 180 - (a+b)
    return third
 }

//Other Solutions:
const otherAngle = (a, b) => 180 - a - b

//Another Solution:
function otherAngle(a, b) {
    if(a<0 || b<0) //ensure no negative angles
      return 0;
    if((a+b)>=180) //ensure 2 angles don't sum up to 180
      return 0;
    return 180 - a - b; //return missing angle
>>>>>>> cc883510be3140a430713e0c41cf7970f82962e0
  }