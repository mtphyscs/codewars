// INSTRUCTIONS

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// LINK

// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript


// SOLUTION

var moveZeros = function (arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  return arr;
};