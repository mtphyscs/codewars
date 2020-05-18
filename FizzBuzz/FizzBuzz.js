// INSTRUCTIONS

// Write a function that returns a sequence of numbers from 1 to 100.

// The function should be able to be called with or without arguments.

// If no arguments are given, each number in the sequence divisible by 3 should be replaced with the word 'Fizz', and each number in the sequence divisible by 5 should be replaced with the word 'Buzz'. If the number is divisble by both 3 and 5, then it should be replaced with 'FizzBuzz'.

// The function should also be able to take up to 4 arguments. The first and second arguments are strings, which should be 'Fizz' and 'Buzz' by default.

// The third and fourth arguments are integers and and should be 3 and 5 by default.


// LINK

// https://www.codewars.com/kata/5355a811a93a501adf000ab7/train/javascript


// SOLUTION

var fizzBuzzCustom = function (stringOne, stringTwo, numOne, numTwo) {
  return new Array(100)
    .join()
    .split(",")
    .map(function (a, i) {
      return (
        "" +
          ((i + 1) % (numOne || 3) ? "" : stringOne || "Fizz") +
          ((i + 1) % (numTwo || 5) ? "" : stringTwo || "Buzz") || i + 1
      );
    });
};