// INSTRUCTIONS

// Given a list of numbers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).



// LINK

// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript



// SOLUTION


const oddOrEven = a => a.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd';