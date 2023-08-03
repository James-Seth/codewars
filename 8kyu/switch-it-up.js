// Describtion
// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

//My Solution:
function switchItUp(number){
if(number === 0){
  return "Zero";
  }
if(number === 1){
  return "One";
  }
if(number === 2){
  return "Two";
  }
if(number === 3){
  return "Three";
  }
if(number === 4){
  return "Four";
  }
if(number === 5){
  return "Five";
  }
if(number === 6){
  return "Six";
  }
if(number === 7){
  return "Seven";
  }
if(number === 8){
  return "Eight";
  }
if(number === 9){
  return "Nine";
  }
}

//Other Solutions:
function switchItUp(number){
  switch(number) {
    case 0:
      return 'Zero';
    case 1:
      return 'One';
    case 2:
      return 'Two';
    case 3:
      return 'Three';
    case 4:
      return  'Four';
    case 5:
      return 'Five';
    case 6:
      return 'Six';
    case 7:
      return 'Seven';
    case 8:
      return 'Eight';
    case 9:
      return 'Nine';
    default:
      return 'Unknown number';
  }
}

//Another Solution:
//Little Cleaner using switch:case
function switchItUp(number) {
    switch (number) {
      case 0: return 'Zero';
      case 1: return 'One';
      case 2: return 'Two';
      case 3: return 'Three';
      case 4: return 'Four';
      case 5: return 'Five';
      case 6: return 'Six';
      case 7: return 'Seven';
      case 8: return 'Eight';
      case 9: return 'Nine';
    }
  }