// INSTRUCTIONS

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.


// LINK

// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript


// SOLUTION

function solution(number) {
  var sum = 0;
  for (var i = 3; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}