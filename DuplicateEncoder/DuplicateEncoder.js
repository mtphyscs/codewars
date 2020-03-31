// INSTRUCTIONS

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.


// LINK


// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript



// SOLUTION

let duplicateEncoder = str => {
  str = str.toLowerCase().split("");
  return str
    .map(a => (str.indexOf(a) === str.lastIndexOf(a) ? "(" : ")"))
    .join("");
}

