// INSTRUCTIONS
// Complete the square sum
// function so that it squares each number passed into it and then sums the results together.

// For example,
// for [1, 2, 2] it should
// return 9 because 1 ^ 2 + 2 ^ 2 + 2 ^ 2 = 9.

// LINK
// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

// SOLUTION

function squareSum(numbers){

    var square_sum = [];
    
    for (i = 0; i < numbers.length; i++) {
    square_sum.push(numbers[i]*numbers[i]);
    }
    var SquareSum = 0
    
    for (j = 0; j < square_sum.length; j++) {
      
      SquareSum = SquareSum + square_sum[j];
    }
     
    return SquareSum;
    }
    
    squareSum([1,2,3])