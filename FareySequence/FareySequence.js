// INSTRUCTIONS

// In mathematics, the Farey sequence of order n is the sequence of completely reduced fractions between 0 and 1 with denominators less than or equal to n, arranged in the order of increasing value. Each Farey sequence starts with the value 0, denoted by the fraction 0/1, and ends with the value 1, denoted by the fraction 1/1. For example, the Farey sequence of order n = 5 is:
// {0/1, 1/5, 1/4, 1/3, 2/5, 1/2, 3/5, 2/3, 3/4, 4/5, 1/1}.

// Given two positive integers n and m, determine the mth (1-based) fraction of the Farey sequence of order n.

// LINK

// https://www.codewars.com/kata/590926c5579da9e62000003b/train/javascript


// SOLUTION

function fareySequence(n, m) {
  let [[x0, y0], [x1, y1]] = [
    [0, 1],
    [1, n],
  ];
  while (--m > 0) {
    [[x0, y0], [x1, y1]] = [
      [x1, y1],
      [
        Math.floor((y0 + n) / y1) * x1 - x0,
        Math.floor((y0 + n) / y1) * y1 - y0,
      ],
    ];
  }
  return `${x0}/${y0}`;
}