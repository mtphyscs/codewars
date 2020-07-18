// INSTRUCTIONS

// When subtracting integers by hand, you can use a strategy called regrouping. (This strategy is also sometimes called borrowing.)

// In this strategy, corresponding digits are subtracted from each other one by one, from right to left, unless the digit of the minuend (the number being subtracted from) is smaller than the corresponding digit of the subtrahend (the number being subtracted).

// In this case, you have to borrow 10 from the digit of the minuend immediately to the left of the current one. You can see an example of this method at work here.

// When you subtract using regrouping, all the numbers that are being subtracted (the subtrahend) remain the same, while the numbers that are being subtracted from (the minuend) may change. Given two integers of the same length, return an array containing the numbers that are being subtracted from when performing subtraction by hand, from right to left.

// LINK
// https://www.codewars.com/kata/590c3b1ff06c49a024000001/train/javascript

// SOLUTION

function subtractionByRegrouping(minuend, subtrahend) {
  var result = [];
  var min = minuend.toString().split("");
  var sub = subtrahend.toString().split("");
  var len = min.length;
  for (let i = len - 1; i >= 0; i--) {
    while (sub[i] > min[i]) {
      min[i - 1] -= 1;
      min[i] = +min[i] + 10;
    }
    result.push(+min[i]);
    min[i] -= sub[i];
  }
  return result;
}
