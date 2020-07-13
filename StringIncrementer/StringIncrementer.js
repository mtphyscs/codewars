// INSTRUCTIONS

// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.


// LINK
// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript


// SOLUTION

function incrementString(str) {
  var c = str[str.length - 1];
  switch (c) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
      return str.substring(0, str.length - 1) + (parseInt(c) + 1);
    case "9":
      return incrementString(str.substring(0, str.length - 1)) + 0;
    default:
      return str + "1";
  }
}