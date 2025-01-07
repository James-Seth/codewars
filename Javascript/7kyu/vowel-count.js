//Describtion:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//My Solution:
function getCount(str) {
    let vowel = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for( let char of str){
      if(vowels.includes(char)){
        vowel++
      }
    }
    return vowel
  }

//Other Solutions:
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

//Another One:
function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }
