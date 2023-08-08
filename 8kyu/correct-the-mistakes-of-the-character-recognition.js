//Describtion:
// Character recognition software is widely used to digitise printed texts. 
// Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), 
// are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to 
// handle the following mistakes:

//     S is misinterpreted as 5
//     O is misinterpreted as 0
//     I is misinterpreted as 1

// The test cases contain numbers only by mistake.



//My Solution:
function correct(string){
    let newString = '';
    for(const char of string){
      if(char === '5'){
        newString += 'S'
      }else if(char === '0'){
        newString += 'O'
      }else if(char === '1'){
        newString += 'I'
      }else{
        newString += char;
      }
    }
    return newString
  }

//Other Solutions:
function correct(string) {
    return string.replace(/0/g, "O")
                 .replace(/5/g, "S")
                 .replace(/1/g, "I");
}

//Another one:
function correct(s){
	s = s.split('');
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '5') s[i] = 'S';
    else if (s[i] === '0') s[i] = 'O';
    else if (s[i] === '1') s[i] = 'I';
    }
  return s.join('');
}