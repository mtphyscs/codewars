// INSTRUCTIONS

// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.


// LINK

// https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript


// SOLUTION

const validBraces = (b) => {
  const bs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const s = [];

  for (let i = 0; i < b.length; i++) {
    if (["{", "[", "("].includes(b[i])) {
      s.push(b[i]);
    } else if (s[s.length - 1] === bs[b[i]]) {
      s.pop();
    } else {
      return false;
    }
  }

  return s.length === 0;
};