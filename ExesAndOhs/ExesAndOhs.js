// INSTRUCTIONS

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.


// LINK

// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript


// SOLUTION

function XO(str) {
  return (
    str.toLowerCase().split("x").length === str.toLowerCase().split("o").length
  );
}