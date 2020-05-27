// INSTRUCTIONS

// A permutation cycle is a subset of a permutation whose elements trade places with one another.(see more details in the example below)

// Your task is to find the number of cycles of a given permutation.

// Input/Output
// [input] integer array permutation

// A non-empty array representing a permutation of integers from 0 to n-1.

// 3 ≤ permutation.length ≤ 20.

// [output] an integer


// LINK

// https://www.codewars.com/kata/5909467de494bbf3d40000d1/train/javascript


// SOLUTION

function permutationCycles(p) {
    let s=0;
    for(let i=0 ,m={}; i<p.length; i++){
      s += !m[i];
      while (!m[i]) 
      {
        m[i]=1;
        i=p[i];
      }
    }
    return s;
  }