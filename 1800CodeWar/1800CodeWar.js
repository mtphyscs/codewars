// INSTRUCTIONS

// There is a preloaded array of lots of 3 and 4 letter (upper-case) "words".

// For JavaScript it is Preloaded.WORDS
// Given the 1-800 (phone word) number that the company wants to use, you need to check against all known words and return the set of all possible 1-800 numbers which can be formed using those same digits.

// LINK

// https://www.codewars.com/kata/5a3267b2ee1aaead3d000037/train/javascript

// SOLUTION

const check1800 = (str) => {
  let words = [];
  str = str.slice(6, str.length);

  words[0] = str.slice(0, str.indexOf("-"));
  words[1] = str.slice(str.indexOf("-") + 1, str.length);

  if (words[0].length == 3) {
    words[2] = words[0].slice(0, 3) + words[1][0];
    words[3] = words[1].slice(1, 4);
  } else {
    words[2] = words[0].slice(0, 3);
    words[3] = words[0][words[0].length - 1] + words[1].slice(0, 3);
  }

  let numbers = [];
  for (var i = 0; i < words.length; i++) {
    numbers[i] = new RegExp(`^${convert(words[i])}$`);
  }

  let valid_words = [];
  for (var i = 0; i < words.length; i++) {
    valid_words[i] = Preloaded.WORDS.filter((word) => word.match(numbers[i]));
  }

  let results = [];
  for (var x of valid_words[0]) {
    for (var y of valid_words[1]) {
      results.push(`1-800-${x}-${y}`);
    }
  }
  for (var x of valid_words[2]) {
    for (var y of valid_words[3]) {
      results.push(`1-800-${x}-${y}`);
    }
  }
  return results;
};

const convert = (word) => {
  return word
    .replace(/[ABC]/g, "[ABC]")
    .replace(/[DEF]/g, "[DEF]")
    .replace(/[GHI]/g, "[GHI]")
    .replace(/[JKL]/g, "[JKL]")
    .replace(/[MNO]/g, "[MNO]")
    .replace(/[PQRS]/g, "[PQRS]")
    .replace(/[TUV]/g, "[TUV]")
    .replace(/[WXYZ]/g, "[WXYZ]");
};