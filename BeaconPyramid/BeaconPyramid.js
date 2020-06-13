// INSTRUCTIONS

// Implement a function that takes one argument which is the number of levels of the pyramid, and returns an object of the form: {total: 9, gold: 9, diamond: 0, emerald: 0, iron: 0}.

// LINK

// https://www.codewars.com/kata/5839cd780426f5d0ec00009a/train/javascript

// SOLUTION

function blocksToCollect(n) {
  let a = ["gold", "diamond", "emerald", "iron"],
    d = a.reduce((x, y) => ((x[y] = 0), x), { total: 0 });
  for (let i = 0, x; i < n; i++)
    (d[a[i % 4]] += x = ((i + 1) * 2 + 1) ** 2), (d["total"] += x);
  return d;
}