//Describtion:
// Given a string of digits, you should replace any digit below 5 with '0'
// and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//My Solution:
function fakeBin(x){
    let newBin = ''
    for(let i = 0; i < x.length; i += 1){
      if(x[i] < 5){
        newBin += 0
      }else{
        newBin += 1
      }
    }
    return newBin
    }

//Other Solutions:
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

//Another one:
function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
  }