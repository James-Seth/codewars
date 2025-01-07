//Describtion:
// To solve this Kata, complete the function, calculateHypotenuse(a,b), which will return the length of the hyptenuse for a right angled triangle with the other two sides having a length equal to the inputs. More details:

//     The returned value should be a number rounded to three decimal places
//     An error (ArgumentException in C#) should be thrown if an invalid input is provided (inputs should both be numbers that are above zero)

// calculateHypotenuse(1,1); // returns 1.414
// calculateHypotenuse(3,4); // returns 5
// calculateHypotenuse(-2,1); // throws error
// calculateHypotenuse("one", "two"); // throws error

// For more information on the hypotenuse, visit: http://en.wikipedia.org/wiki/Hypotenuse

//My Solution:
function calculateHypotenuse(a, b) {
    if(a > 0 && b > 0 && typeof(a) === 'number' && typeof(b) === 'number'){
          return +Math.hypot(a, b).toFixed(3);    
      }else{
          throw Error("Not the kind numbers you are looking for"); 
      }
  }

//Other solutions:
function calculateHypotenuse(a,b){
	if (!a || !b){
  	throw "Inputs must have a value."
  }
	if (typeof a != 'number' || typeof b != 'number'){
  	throw "Inputs must be numbers."
 	}
	if (a < 0 || b < 0){
    throw "Inputs must be nonnegative."
  }
  return parseFloat(Math.sqrt(a*a + b*b).toFixed(3));
}

//Another one:
const calculateHypotenuse = (a, b) =>
  Number.isFinite(a) && Number.isFinite(b) && a > 0 && b > 0 ? Math.round(Math.hypot(a, b) * 1e3) / 1e3 : (() => {throw new Error();})();