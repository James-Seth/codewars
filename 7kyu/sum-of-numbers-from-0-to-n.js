//Describtion:

// We want to generate a function that computes the series starting from 0 and ending until the given number.
// Example:

// Input:

// > 6

// Output:

//     0+1+2+3+4+5+6 = 21

// Input:

// > -15

// Output:

//     -15<0

// Input:

// > 0

// Output:

//     0=0

//My Solution:
var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      let arr=[];
      for(let i=0;i<=count;i++) {arr.push(i)};
      let b=arr.reduce((acc,curr)=>acc+curr,0)
      let a=arr.join('+');
      if(count<0) return `${count}<0`;
      if(count==0) return `${count}=0`;
      return `${a} = ${b}`
    };
  
    return SequenceSum;
  
  })();

  //Other solutions:
  class SequenceSum {
    static showSequence(n) {
      return n < 0
        ? `${n}<0`
        : `${Array.from({length: n+1}, (v, k) => k).join('+')}${n?' = ':'='}${n*(n+1)/2}`;
    }
  }

  //Another one:
  function SequenceSum() {}

SequenceSum.showSequence = function(a) {
  if (a < 0) return `${a}<0`;
  if (a === 0) return '0=0';
  
  let arr = Array.from({length: a+1}, (_,i)=> i)
  return `${arr.join('+')} = ${arr.reduce((x,y)=> x + y)}`
};

