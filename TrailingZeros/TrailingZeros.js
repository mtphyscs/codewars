// INSTRUCTIONS

// Write a program that will calculate the number of trailing zeros in a factorial of a given number.


// LINK

// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript


// SOLUTION

function zeros(n) {
  for (var result = 0, i = 5; n >= i; i *= 5) result += 0 | (n / i);
  return result;
}