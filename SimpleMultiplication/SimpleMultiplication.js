// INSTRUCTIONS

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


// LINK
// https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript



// SOLUTION

function simpleMultiplication (n) {
    return n * (n % 2 ? 9 : 8);
  }