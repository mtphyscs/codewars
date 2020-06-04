// INSTURCTIONS

// Hence the following method: Multiply the right most digit of the number with the left most number in the sequence shown above, the second right most digit to the second left most digit of the number in the sequence. The cycle goes on and you sum all these products. Repeat this process until the sequence of sums is stationary.


// LINK

// https://www.codewars.com/kata/564057bc348c7200bd0000ff/train/javascript


// SOLUTION


function thirt(n) {
  var w = [1, 10, 9, 12, 3, 4];
  while (true) {
    var r = n,
      q = -1,
      c = 0,
      j = 0;
    while (q !== 0) {
      q = Math.floor(r / 10);
      c += (r % 10) * w[j % 6];
      r = q;
      j++;
    }
    if (c === n) return c;
    n = c;
  }
}