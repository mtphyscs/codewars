// INSTRUCTIONS

// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.




// LINK

// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript





// SOLUTION


let sortArray = function(arr) {
  let idx = arr.map((a, i) => (a % 2 === 1 ? i : "")).filter(a => a !== "");
  let odds = arr.filter(a => a % 2 === 1).sort((a, b) => a - b);
  for (let i = 0; i < idx.length; i += 1) {
    arr[idx[i]] = odds[i];
  }
  return arr;
};