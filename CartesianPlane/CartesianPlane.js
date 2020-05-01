// INSTRUCTIONS

// Consider integer coordinates x, y in the Cartesian plan and three functions f, g, h defined by:

// f: 1 <= x <= n, 1 <= y <= n --> f(x, y) = min(x, y)
// g: 1 <= x <= n, 1 <= y <= n --> g(x, y) = max(x, y)
// h: 1 <= x <= n, 1 <= y <= n --> h(x, y) = x + y


// LINK

// https://www.codewars.com/kata/559e3224324a2b6e66000046/train/javascript


// SOLUTION

const sumin = (n) => (n * (n + 1) * (2 * n + 1)) / 6;
const sumax = (n) => (n * (n + 1) * (4 * n - 1)) / 6;
const sumsum = (n) => n * n * (n + 1);