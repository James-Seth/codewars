//Describtions:
// Wilson primes satisfy the following condition. Let PPP represent a prime number.

// Then,
// (P−1)!+1P∗P\displaystyle\frac{(P-1)! + 1}{P * P}P∗P(P−1)!+1​

// should give a whole number, where P!P!P! is the factorial of PPP.

// Your task is to create a function that returns true if the given number is a Wilson prime and false otherwise.

//My Solution:
function amIWilson(p) {
    if (p === 5 || p === 13 || p === 563) {
      return true;
    }
    return false;
  }

//Other solutions:
function amIWilson(p) {
    p = BigInt(p);
    const fac = n => n ? n * fac(n-1n) : 1n;
    const d = (fac(p-1n) + 1n);
    return !(d % (p * p));
  }