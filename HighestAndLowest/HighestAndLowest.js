// INSTRUCTIONS
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.


// LINK
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript



// SOLUTION

function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }