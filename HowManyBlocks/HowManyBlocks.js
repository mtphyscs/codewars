// LINK
// https://www.codewars.com/kata/56e0f1dc09eb083b07000028/train/javascript

// SOLUTION

function testit(sq) {
  let grid = sq.split("\n").map((s) => s.split(""));
  function count(ch, r, c, k) {
    for (let i = r; i <= r + k; i++) {
      if (!grid[i] || grid[i][c + k] !== ch) {
        return 0;
      }
    }
    for (let j = c; j <= c + k; j++) {
      if (grid[r + k][j] !== ch) {
        return 0;
      }
    }
    return 1 + count(ch, r, c, k + 1);
  }
  let sum = 0;
  for (let r = 0; r < grid.length; r++) {
    sum += grid[r]
      .map((ch, c) => count(ch, r, c, 0))
      .reduce((a, b) => a + b, 0);
  }
  return sum;
}