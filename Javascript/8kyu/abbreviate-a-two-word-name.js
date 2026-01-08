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
// Assumes input is always two words separated by a single space (per kata spec)
// Uses Array.map to extract first letters and uppercase them
// If input format changes (e.g., more than two words), this will still work but may not match requirements
function abbrevName(name){
    return name.split(" ").map(z => z[0].toUpperCase()).join(".");
}

//Other solutions:

// Relies on string indexing and concatenation, then uppercases the whole result
function abbrevName(name){
    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

//Another one:
// Uses String.substr (deprecated, prefer slice or substring in new code)
// Otherwise similar to first solution; it works
// Handles casing and formatting as required
function abbrevName(name){
    return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}
