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
// Professional Note:
// - Assumes input is always two words separated by a single space (per kata spec)
// - Uses Array.map for concise transformation; readable and idiomatic ES6
// - Handles casing robustly (always outputs uppercase initials)
// - If input format changes (e.g., more than two words), this will still work but may not match requirements
// - Performance: O(n) where n is input length; negligible for short strings
function abbrevName(name){
    return name.split(" ").map(z => z[0].toUpperCase()).join(".");
}

//Other solutions:
// Professional Note:
// - Relies on string indexing and concatenation, then uppercases the whole result
// - Slightly less flexible: if input contains more than two words, result may be incorrect
// - Uppercases both initials and the dot ("S.H" vs "S.h" if not uppercased)
// - Easy to read for beginners, but less idiomatic in modern JS
function abbrevName(name){
    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

//Another one:
// Professional Note:
// - Uses String.substr (deprecated, prefer slice or substring in new code)
// - Otherwise similar to first solution; functional, concise
// - Handles casing and formatting as required
// - Maintainability: consider updating to use slice for future-proofing
function abbrevName(name){
    return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}
