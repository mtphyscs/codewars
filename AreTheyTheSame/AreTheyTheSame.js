// INSTRUCTIONS

// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure)
//  that checks whether the two arrays have the "same" elements, with the same multiplicities. 
//  "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.


// LINK

// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript


// SOLUTION

function comp(a, b) {
  return (
    !!a &&
    !!b &&
    a
      .map((x) => x * x)
      .sort()
      .join() == b.sort().join()
  );
}