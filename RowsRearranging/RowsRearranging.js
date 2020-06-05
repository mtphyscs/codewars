// INSTRUCTIONS

// Given a rectangular matrix of integers, check if it is possible to rearrange its rows in such a way that all its columns become strictly increasing sequences (read from top to bottom).

// Note, that you should not rearrange the elements of rows.


// LINK

// https://www.codewars.com/kata/58958ef541c9794213000090/train/javascript


// SOLUTION


function rowsRearranging(a) {
  const f = (x, y) => {
    for (let i = 0; i < x.length; i++) if (x[i] !== y[i]) return x[i] - y[i];
    return 0;
  };
  a.sort(f);
  for (let i = 0; i < a[0].length; i++)
    for (let j = 1; j < a.length; j++) if (a[j - 1][i] >= a[j][i]) return false;
  return true;
}