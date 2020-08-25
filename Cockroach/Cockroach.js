// INSTRUCTIONS 

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).


// LINK

// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript


// SOLUTION

const cockroachSpeed = s => Math.floor(s / 0.036);
