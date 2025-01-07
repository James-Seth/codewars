//Describtion:
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
// Example

// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

// Fundamentals
// ASCII Art

//My Solution:
function generateShape(n){
    return ("+".repeat(n)+"\n").repeat(n).trim()
  }

//Other solutions:
function generateShape(int){  
    var ans='';
    for (var i=0; i<int; ++i)
    {
      for (var j=0; j<int; ++j)
        ans+='+';
      if (i!=int-1)
        ans+='\n';
    }
    return ans;
  }