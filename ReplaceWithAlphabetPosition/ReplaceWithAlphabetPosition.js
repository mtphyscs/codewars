// INSTRUCTIONS 

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.


// LINK

// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript


// SOLUTION

function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split("")
    .filter((char) => /[a-z]/.test(char))
    .map((letter) => letter.charCodeAt() - 97 + 1)
    .join(" ");
}