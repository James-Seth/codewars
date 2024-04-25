//Describtion:

//My Solution:
function setAlarm(employed, vacation){
    if(vacation === true && employed === true){
      return false
    }else if(employed === true){
      return true
    }else{
      return false
    }
   }

//Other solutions:
const setAlarm = (employed, vacation) => employed && !vacation;

//Another one:
function setAlarm(employed, vacation){
    return (employed && !vacation) ? true : false;
  }