// INSTRUCTIONS

// In mathematics, a Diophantine equation is a polynomial equation, usually with two or more unknowns, such that only the integer solutions are sought or studied.

// In this kata we want to find all integers x, y (x >= 0, y >= 0) solutions of a diophantine equation of the form:

// x2 - 4 * y2 = n
// (where the unknowns are x and y, and n is a given positive number) in decreasing order of the positive xi.

// If there is no solution return [] or "[]" or "". (See "RUN SAMPLE TESTS" for examples of returns).


// LINK

// https://www.codewars.com/kata/554f76dca89983cc400000bb/train/javascript



// SOLUTION

function solequa(n) {
  let result = [],
    x,
    y,
    a,
    b;
  for (let a = 1; a <= Math.sqrt(n); a++) {
    if (Number.isInteger((b = n / a))) {
      if (Number.isInteger((x = (b + a) / 2))) {
        if (Number.isInteger((y = (b - a) / 4))) {
          result.push([x, y]);
        }
      }
    }
  }
  return result;
}