// INSTRUCTIONS

// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?


// LINK

// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript


// SOLUTION

function orderWeight(str) {
  const sum = (x) => x.split("").reduce((res, cur) => res + +cur, 0);
  return str
    .split(" ")
    .sort((a, b) => {
      const diff = sum(a) - sum(b);
      return diff == 0 ? (a > b ? 1 : -1) : diff;
    })
    .join(" ");
}