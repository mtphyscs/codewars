// INSTRUCTIONS
// Mutation is a genetic operator used to maintain genetic diversity from one generation of a population of genetic algorithm chromosomes to the next.

// Mutation

// A mutation here may happen on zero or more positions in a chromosome. It is going to check every position and by a given probability it will decide if a mutation will occur.

// A mutation is the change from 0 to 1 or from 1 to 0.

// Note: Some tests are random. If you think your algorithm is correct but the result fails, trying again should work.


// LINK

// https://www.codewars.com/kata/567b39b27d0a4606a5000057/train/javascript


// SOLUTION

const mutate = (chromosome, p) => {
  return chromosome
    .split("")
    .map((a) => (p == 0 ? a : (a == "1") & (p == 1) ? "0" : "1"))
    .join("");
};