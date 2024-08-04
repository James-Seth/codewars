//Desribtion:
// Your function takes two arguments:

//     current father's age (years)
//     current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

//My Solution:
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(2 * sonYearsOld - dadYearsOld)
   }

//Other solutions:
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld)
}

//Another one:
const twiceAsOld = (d, s) => Math.abs(d - 2 * s);