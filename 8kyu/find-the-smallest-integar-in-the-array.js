//Describtion:
// Given an array of integers your solution should find the smallest integer.

// For example:

//     Given [34, 15, 88, 2] your solution will return 2
//     Given [34, -345, -1, 100] your solution will return -345

// You can assume, for the purpose of this kata, that the supplied array will not be empty.

//My Solution:
class SmallestIntegerFinder{
    findSmallestInt = (args) => Math.min(...args) 
  }

//Other solutions:
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }

//Another one:
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a,b)=>a-b)[0];
    }
  }