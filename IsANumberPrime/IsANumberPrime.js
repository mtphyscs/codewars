// INSTRUCTIONS
// Define a function that takes an integer argument and returns logical value true or false depending on if the integer is a prime.
// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// LINK
// https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript



// SOLUTION

function isPrime(num) {
    if (num < 2) {
       return false;
    }
  if (num === 2) {
       return true;
    }
    
    const maximumDividor = Math.sqrt(num) + 1;
  for (let i = 2; i < maximumDividor; i++) {
       if (num % i === 0) {
         return false;
       }
    }
  return true;
  }
