// INSTRUCTIONS

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.


// LINK
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript


// SOLUTION

function binaryArrayToNumber(arr) {
  return arr.reduce((a, b) => (a << 1) | b);
}