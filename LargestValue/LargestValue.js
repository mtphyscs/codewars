// INSTRUCTIONS

// Task
// You are given a positive integer (n), and your task is to find the largest number less than n, which can be written in the form a**b, where a can be any non-negative integer and b is an integer greater than or equal to 2. Try not to make the code time out :)

// The input range is from 1 to 1,000,000.

// Return
// Return your answer in the form (x, y) or ([x, y], depending on the language ), where x is the value of a**b, and y is the number of occurrences of a**b. By the way ** means ^ or power, so 2 ** 4 = 16. If you are given a number less than or equal to 4, that is not 1, return (1, -1), because there is an infinite number of values for it: 1**2, 1**3, 1**4, .... If you are given 1, return (0, -1).


// LINK

// https://www.codewars.com/kata/5e860c16c7826f002dc60ebb/train/javascript


// SOLUTION

function largestPower(n) {
  let arr = [];
  let res = [];
  if (n <= 4 && n > 1) {
    res.push(1, -1);
    return res;
  } else if (n <= 1) return [0, -1];
  else {
    for (let i = 2; i < 1000; i++) {
      for (let j = 2; j < 10; j++) {
        arr.push(i ** j);
      }
    }
    arr.sort((a, b) => b - a);
    let newArr = arr.filter((item) => item < n);
    newArr = newArr.filter((item, i, arr) => item === arr[0]);
    res.push(newArr[0], newArr.length);
    return res;
  }
}