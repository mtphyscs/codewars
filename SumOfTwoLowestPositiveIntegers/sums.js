// Instructions
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.


// Solution

function sumTwoSmallestNumbers(numbers) {
    return numbers.sort(function(a, b) {return a - b;})[0] + numbers.sort(function(a, b) {return a - b;})[1];
  }
  
  console.log(sumTwoSmallestNumbers([19,5,42,2,77])); // should return 7
  console.log(sumTwoSmallestNumbers([10,343445353,3453445,3453545353453])); // should return 3453455
  console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // should return 13
  console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); // should return 6
  console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])); // should return 10
  console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])); // should return 24
  console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])); // should return 16

