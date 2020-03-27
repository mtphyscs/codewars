// INSTRUCTIONS 

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])


// LINK

// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript


// SOLUTION

function findNeedle(haystack) {
  var i = 0;
  while (i < haystack.length) {
    if (haystack[i] == "needle") {
      return "found the needle at position " + i;
    }
    i++;
  }
}
