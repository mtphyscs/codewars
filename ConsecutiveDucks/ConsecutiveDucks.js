// INSTRUCTIONS

// Positive integers have so many gorgeous features. Some of them could be expressed as a sum of two or more consecutive positive numbers.

// Consider an Example :
// 10 , could be expressed as a sum of 1 + 2 + 3 + 4.
// Task
// Given Positive integer, N , Return true if it could be expressed as a sum of two or more consecutive positive numbers , OtherWise return false .

// Notes
// Guaranteed constraint : 2 ≤ N ≤ (2^32) -1 .


// LINK

// https://www.codewars.com/kata/5dae2599a8f7d90025d2f15f/train/javascript


// SOLUTION

function consecutiveDucks(num) {
  return (num & (num - 1)) !== 0 && num !== 0;
}
