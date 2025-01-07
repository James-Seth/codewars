//Description:
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:
// case 	return
// name equals owner 	'Hello boss'
// otherwise

//My Solution:
function greet (name, owner) {
    let n1 = name
    let n2 = owner
    if(n1 == n2) {
      return ('Hello boss')
    }else {
      return ('Hello guest')
    }
  }

//Other solutions:
function greet (name, owner) {
    return name === owner ? 'Hello boss' : 	'Hello guest';
  }

//Another one:
const greet = (name, owner) => name == owner? 'Hello boss': 'Hello guest';