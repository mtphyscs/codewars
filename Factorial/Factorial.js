// INSTRUCTIONS

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).



// LINK

// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript


// SOLUTION

function factorial(n) {
  let fact = 1;
  if (n == 0) {
    return 1;
  } else if (n > 12 || n < 0) {
    throw "RangeError";
  } else {
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
  }
  return fact;
}