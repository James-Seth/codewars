//Describtion:
// Implement the function generateRange which takes three arguments (start, stop, step) and returns the range of integers from start to stop (inclusive) in increments of step.
// Examples

// (1, 10, 1) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// (-10, 1, 1) -> [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]
// (1, 15, 20) -> [1]

// Note

//     start < stop
//     step > 0

//My Solution:
function generateRange(min, max, step) {
    const result = [];
    for (let i = min; i <= max; i += step) {
      result.push(i)
    }
    return result
  }

//Other solutions:
function generateRange(min, max, step){
    return Array.from({length:1+(max-min)/step}, (_, i) => min + i*step);
  }