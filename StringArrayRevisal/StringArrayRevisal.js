// INSTRUCTIONS

// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
 

// LINK
// https://www.codewars.com/kata/59f08f89a5e129c543000069/train/javascript


// SOLUTION

function dup(s) {
    return  s.map (w => w.replace(/(.)\1+/g,'$1'))
   };