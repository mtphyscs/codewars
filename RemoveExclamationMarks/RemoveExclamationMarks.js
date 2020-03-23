// INSTRUCTIONS

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


// LINK

// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript



// SOLUTION  

function removeExclamationMarks(s) {
    return s.split('!').join('');
  }