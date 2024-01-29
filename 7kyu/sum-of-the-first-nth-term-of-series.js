//Describtion:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

// Rules:

//     You need to round the answer to 2 decimal places and return it as String.

//     If the given value is 0 then it should return 0.00

//     You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)

// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

//My Solution:
function SeriesSum(n)
{
  let result = 0
  for(let i = 0; i < n; i++){
    result += 1 / (1 + i * 3)
  }
  return result.toFixed(2)
}

//Other solutions:
function SeriesSum(n, s = 0) {
    return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)
}

//Another one:
function SeriesSum(n) {
    return Array(n).fill(0).map((e, i) => 3 * i + 1).reduce((s, e) => s + 1 / e, 0).toFixed(2);
  }