// INSTRUCTIONS

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.


// LINK

// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript


// SOLUTION


let even = num => num % 2 === 0;

let odd = num => Math.abs(num % 2) == 1;

let findOutlier = ints =>
  ints.slice(0, 3).filter(even).length > 1 ? ints.find(odd) : ints.find(even);


