//Describtion:
// Messi goals function

// Messi is a soccer player with goals in three leagues:

//     LaLiga
//     Copa del Rey
//     Champions

// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

//My Solution:
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }

//Other solutions:
const goals = (a,b,c) => a + b + c;

//Another one:
const goals = (...a) => a.reduce((s, v) => s + v, 0);
