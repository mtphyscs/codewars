// INSTRUCTIONS

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.


// LINK

// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript


// SOLUTION

function scramble(str1, str2) {
  var obj1 = {};
  var obj2 = {};
  for (var i = 0; i < str1.length; i++) {
    if (!obj1[str1[i]]) {
      obj1[str1[i]] = 1;
    } else {
      obj1[str1[i]]++;
    }
  }
  for (var j = 0; j < str2.length; j++) {
    if (!obj2[str2[j]]) {
      obj2[str2[j]] = 1;
    } else {
      obj2[str2[j]]++;
    }
  }
  for (var key in obj2) {
    if (!obj1[key] || obj1[key] < obj2[key]) {
      return false;
    }
  }
  return true;
}