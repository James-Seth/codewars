//Describtion:

//My Solution:
function isIsogram(str){
    var word = str.toLowerCase();
    var wordSet = new Set(word);
    var lenWord = word.length;
    var lenWordSet = wordSet.size;

    if (lenWord === lenWordSet) {
        return true
    } else {
        return false
    }
}

//Other solutions:
function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

//Another one:
function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
  }