// INSTRUCTIONS

// The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

// Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

// Given a string of binary, return the version the photocopier gives you as a string.



// LINK

// https://www.codewars.com/kata/57ed56657b45ef922300002b/train/javascript


// SOLUTION

function broken(x) {
  return x
    .split("")
    .map(a => (a == "0" ? "1" : "0"))
    .join("");
}



