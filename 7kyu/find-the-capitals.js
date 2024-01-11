//Describtion:
// Instructions

// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
// Example (Input --> Output)

// "CodEWaRs" --> [0,3,4,6]

//My Solution:
var capitals = function (word) {
    var x = [];
    for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) 
        x.push(i);
    }
    return x;
  };

//Other solutions:
var capitals = function (word) {
	return word.split('').reduce(function(memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
};

//Another one:
var capitals = function (word) {
	return word.split('')
             .map(function(l, i) { if (l.toUpperCase() === l) return i; })
             .filter(function(i) { return i != null })
};