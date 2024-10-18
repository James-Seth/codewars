//Description:

//My Solution:
function expressionMatter(a, b, c) {
    let output = [`${a*(b+c)}`, `${a*b*c}`, `${a+b*c}`, `${(a+b)*c}`, `${a+b+c}`];
      return Math.max(...output);
  }

//Other solutions:
function expressionMatter(a, b, c) {
    return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));
  }