// INSTRUCTIONS
// Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

// LINK
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

// SOLUTION

function removeEveryOther(arr) {
  return arr.filter(function (elem, index) {
    return index % 2 === 0;
  });
}
