//Describtion:
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

// Note: In COBOL, it should return "found the needle at position 6"

//My Solution:
function findNeedle(haystack) {
    // indexOf() is the most efficient approach since we only need the first occurrence
    // and it returns -1 if not found (though problem guarantees needle exists)
    let needle = haystack.indexOf('needle')
    
    // Template literal provides cleaner string concatenation than traditional '+' operator
    return `found the needle at position ${needle}`
  }

//Other solutions:
function findNeedle(haystack) {
    // Alternative approach using traditional string concatenation
    // Less modern but functionally equivalent to template literals
    return "found the needle at position " + haystack.indexOf("needle");
  }