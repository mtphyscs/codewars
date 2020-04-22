// INSTRUCTIONS

// The aim of the kata is to try to show how difficult it can be to calculate decimals of an irrational number with a certain precision. We have chosen to get a few decimals of the number "pi" using the following infinite series (Leibniz 1646–1716):

// PI / 4 = 1 - 1/3 + 1/5 - 1/7 + ... which gives an approximation of PI / 4.

// http://en.wikipedia.org/wiki/Leibniz_formula_for_%CF%80

// To have a measure of the difficulty we will count how many iterations are needed to calculate PI with a given precision.

// There are several ways to determine the precision of the calculus but to keep things easy we will calculate to within epsilon of your language Math::PI constant. In other words we will stop the iterative process when the absolute value of the difference between our calculation and the Math::PI constant of the given language is less than epsilon.

// Your function returns an array or an arrayList or a string or a tuple depending on the language (See sample tests) where your approximation of PI has 10 decimals

// In Haskell you can use the function "trunc10Dble" (see "Your solution"); in Clojure you can use the function "round" (see "Your solution");in OCaml or Rust the function "rnd10" (see "Your solution") in order to avoid discussions about the result.


// LINK

// https://www.codewars.com/kata/550527b108b86f700000073f/train/javascript


// SOLUTION

function iterPi(epsilon) {
  let almostPi = 0;
  let alternate = 1;
  let i = 1;
  let count = 0;
  while (Math.abs(almostPi * 4 - Math.PI) > epsilon) {
    almostPi += (1 / i) * alternate;
    i += 2;
    alternate *= -1;
    count += 1;
  }
  return [count, Math.round(almostPi * 4 * 10000000000) / 10000000000];
}

iterPi(0.1);