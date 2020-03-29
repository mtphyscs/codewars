// INSTRUCTIONS

// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.



// LINK

// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript



// SOLUTION


function descendingOrder(n) {
  return +(n + "")
    .split("")
    .sort(function(a, b) {
      return b - a;
    })
    .join("");
}

