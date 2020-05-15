// INSTRUCTIONS

// You are given a multiline string windows that represent the current graphical representation of the windows on John's screen. It's always a 4 x 4 matrix. Each position in this matrix will represent the current piece of window showing in each square. To make input easier and clearer, the list of numbers on each line will be delimited by a single space.

// Note that each piece of visible window will appear only in screen areas where the window could appear when brought to the front. For instance, a 1 can only appear in the top left quadrant.

// The output should return true if there exists a sequence of bringing windows to the foreground that would result in the graphical representation of the windows on John's screen.

// Otherwise, the output should be false.


// LINK

// https://www.codewars.com/kata/5a24fff71f7f7051bd000097/train/javascript


// SOLUTION

function isValid(windows) {
  var w = windows.split`\n`.map((x) => x.split` `.map(Number)),
    map = [
      [[1], [1, 2], [2, 3], [3]],
      [
        [1, 4],
        [1, 2, 4, 5],
        [2, 3, 5, 6],
        [3, 6],
      ],
      [
        [4, 7],
        [4, 5, 7, 8],
        [5, 6, 8, 9],
        [6, 9],
      ],
      [[7], [7, 8], [8, 9], [9]],
    ];
  for (var i = 0; i < 9; i++) {
    var next = find();
    if (next === false) return false;
    remove(next);
  }
  return true;

  function find() {
    for (var i = 0; i < 3; i++)
      for (var j = 0; j < 3; j++) {
        var s = [cv(i, j), cv(i, j + 1), cv(i + 1, j), cv(i + 1, j + 1)];
        var t = s[0].filter((x) => s.every((y) => y.includes(x)));
        if (t.length) return [t[0], i, j];
      }
    return false;
  }
  function remove([n, i, j]) {
    for (var x = i; x < i + 2; x++)
      for (var y = j; y < j + 2; y++) {
        map[x][y].splice(map[x][y].indexOf(n), 1);
        w[x][y] =
          map[x][y].length == 0
            ? "."
            : map[x][y].length == 1
            ? map[x][y][0]
            : "?";
      }
  }
  function cv(i, j) {
    return w[i][j] == "?" ? map[i][j] : w[i][j] == "." ? [] : [w[i][j]];
  }
}