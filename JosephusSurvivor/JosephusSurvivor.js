// INSTRUCTIONS

// In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.


// LINK

// https://www.codewars.com/kata/555624b601231dc7a400017a/train/javascript


// SOLUTION


function josephusSurvivor(n, k) {
  let arr = [...Array(n).keys()].map((i) => i + 1);
  let pos = 0;

  while (arr.length > 1) {
    pos = (pos + (k - 1)) % arr.length;
    arr.splice(pos, 1);
  }
  return arr[0];
}