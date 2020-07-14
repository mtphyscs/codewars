// INSTRUCTIONS
// The aim of the kata is to decompose n! (factorial n) into its prime factors.
// Prime numbers should be in increasing order. When the exponent of a prime is 1 don't put the exponent.

// Notes

// the function is decomp(n) and should return the decomposition of n! into its prime factors in increasing order of the primes, as a string.
// factorial can be a very big number (4000! has 12674 digits, n will go from 300 to 4000).
// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.


// LINK

// https://www.codewars.com/kata/5a045fee46d843effa000070/train/javascript


// SOLUTION 

const decomp = (n) => {
  const factors = {};
  for (let i = 2; i <= n; i++) {
    let num = i;
    for (let j = 2; j <= num; j++) {
      while (num % j === 0) {
        factors[j] ? factors[j]++ : (factors[j] = 1);
        num /= j;
      }
    }
  }
  let str = "";
  for (key in factors) {
    str += factors[key] == 1 ? `${key} * ` : `${key}^${factors[key]} * `;
  }
  return str.slice(0, str.length - 3);
};