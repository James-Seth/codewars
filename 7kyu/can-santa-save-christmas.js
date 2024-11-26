//Description:
// Can Santa save Christmas?

// Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

// But he has only 24 hours left. Can he do it?
// Your Task:

// You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .

//My Solution:
function determineTime (durations) {
    //have fun with coding ^.^
    let time = 0;
    for (let i = 0; i < durations.length; i++){
      let arr = durations[i].split(':');
      let x = +arr[0];
      let m = +arr[1];
      let a = +arr[2];
      let s = x*3600 + m*60 + a;
      time = time + s;
   }
   return (time <= 24*3600);
  }

//Other solutions:
function determineTime(durations){
    let sec = 0;
    let str = [];
    for (let i = 0; i < durations.length; i++) {
      str = durations[i].split(":");
      sec += +str[0] * 3600 + +str [1] * 60 + +str[2];
     }
     return sec/3600 <=24 ? true : false;
 }

//Another one:
function determineTime(durations) {
    const totalHours = durations.reduce((result, duration) => {
      const [hours, minutes, seconds] = duration.split(':').map(Number)
      return (result += hours + minutes / 60 + seconds / 3600)
    }, 0)
  
    return totalHours <= 24
  }