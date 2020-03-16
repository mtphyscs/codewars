// INSTRUCTIONS
// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by
//  commas except for the last two names,
//   which should be separated by an ampersand.

//LINK
// https: www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript


//SOLTUION

function list(names) {
  let result = "";

  if (names.length === 1) {
    return names[0].name;
  } else if (names.length === 2) {
    return names[0].name + " & " + names[1].name;
  } else if (names.length === 0) {
    return "";
  } else {
    for (var i = 0; i < names.length - 2; i++) {
      result += names[i].name + ", ";
    }
    result =
      result +
      names[names.length - 2].name +
      " & " +
      names[names.length - 1].name;
    return result;
  }
}