// Description:

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//My Solution:
function findShort(s){
    let word = s.split(' ')
    let shortest = word[0].length
    let another
    
    for(let i = 0; i < word.length; i++){
      let another = word[i].length
      if(shortest > another) shortest = another
    }
    return shortest
  }

//Other Solutions:
function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }

//Another Solution:
function findShort(s){
	var arr = s.split(' ');
	var smallest = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].length < smallest.length){
			smallest = arr[i];
		}
	}
	return smallest.length;
}

