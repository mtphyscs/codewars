// INSTRUCTIONS

// Mix -nacci sequences using a given pattern p.
// Return the first n elements of the mixed sequence.



// LINK

// https://www.codewars.com/kata/5811aef3acdf4dab5e000251/train/javascript




// SOLUTION

const mixbonacci = (pattern, length) => {
  const gen = (fn, a) => () => (a.push(fn(a)), a.shift());

  const fns = {
    fib: gen(([a, b]) => a + b, [0, 1]),
    pad: gen(([a, b]) => a + b, [1, 0, 0]),
    jac: gen(([a, b]) => 2 * a + b, [0, 1]),
    pel: gen(([a, b]) => a + 2 * b, [0, 1]),
    tri: gen(([a, b, c]) => a + b + c, [0, 0, 1]),
    tet: gen(([a, b, c, d]) => a + b + c + d, [0, 0, 0, 1]),
  };

  return pattern.length
    ? Array.from({ length }, (_, i) => fns[pattern[i % pattern.length]]())
    : [];
};