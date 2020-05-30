// INSTRUCTIONS

// No Story


// LINK

// https://www.codewars.com/kata/56d931ecc443d475d5000003/train/javascript


// SOLUTION


function testit(n) {
  var s = 0;
  while (n) {
    s += n & 1;
    n >>= 1;
  }
  return s;
}