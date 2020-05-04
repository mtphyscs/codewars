// INSTRUCTIONS

// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8^1 + 9^2

// The next number in having this property is 135.

// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.


// LINK

// https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript


// SOLUTION

function sumDigPow(a, b) {
  let resultArr = [];
  let tempString = [];
  let sum;

  for (var i = a; i < b; i++) {
    sum = 0;
    tempString = ("" + i).split("");
    for (var j = 0; j < tempString.length; j++)
      sum += Math.pow(tempString[j], j + 1);
    if (sum === i) resultArr.push(i);
  }
  return resultArr;
}

