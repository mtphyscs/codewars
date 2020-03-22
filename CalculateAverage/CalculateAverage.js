// INSTRUCTIONS

// Write function avg which calculates average of numbers in given list.


// LINK

// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript


// SOLUTION

function find_average(array) {
    var  sum = array.reduce( (a, b) => a + b, 0)
    return sum / array.length;
  }

