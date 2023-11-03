//Description:
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

//My Solution:
function hero(bullets, dragons){
 
    let hero = bullets / 2;
    
    if(hero >= dragons){
      return true
    }else{
      return false
    }
  }

//Other solutions:
function hero(bullets, dragons){
    return bullets >= dragons * 2
  }
  
//Another one:
function hero(bullets, dragons){
    //Get Coding!
    return (bullets / 2 >= dragons) ? true : false;
    }