// INSTRUCTIONS

// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// LINK

// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/javascript


// SOLUTION

function parse(data) {
  var v = 0,
    ret = [];
  for (var c of data) {
    switch (c) {
      case "i":
        v++;
        break;
      case "d":
        v--;
        break;
      case "s":
        v = v * v;
        break;
      case "o":
        ret.push(v);
        break;
    }
  }
  return ret;
}