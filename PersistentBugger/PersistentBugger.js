// INSTRUCTIONS

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.



// LINK

// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript



// SOLUTION

let persistence = function(n) {
  let times = 0;
  while (n.toString().length > 1) {
    times += 1;
    n = n
      .toString()
      .split("")
      .reduce((a, b) => a * b);
  }
  return times;
}