//Description:
// Write a function to convert a name into initials. 
// This kata strictly takes two words with one space in 
// between them.

// The output should be two capital letters with a dot 
// separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

//My Solution:
function abbrevName(name){
    return name.split(" ").map(z => z[0].toUpperCase()).join(".")
  }

//Other solutions:
function abbrevName(name){
    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }

//Another one:
function abbrevName(name){
    return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
  }
