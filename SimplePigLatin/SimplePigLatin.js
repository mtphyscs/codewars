// INSTRUCTIONS

// Move the first letter of each word to the end of it,then add "ay" to the end of the word. 
// Leave punctuation marks untouched.


// LINK

// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript


// SOLUTION

function pigIt(str) {
  return str
    .split(" ")
    .map((word) => {
      return word.substring(1) + word[0] + "ay";
    })
    .join(" ");
}

