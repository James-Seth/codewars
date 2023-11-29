//Description:

//My Solution:
function friend(friends){
    let result = []
    for(let i = 0; i < friends.length; i++)
      if(friends[i].length === 4){
        result.push(friends[i])
      }
    return result
  }

//Other solutions:
function friend(friends){
    return friends.filter(n => n.length === 4)
  }

//Another one:
const friend = friends => friends.filter(friend => friend.length == 4);