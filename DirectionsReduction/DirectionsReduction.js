// INSTRUCTIONS

// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

// The Haskell version takes a list of directions with data Direction = North | East | West | South.
// The Clojure version returns nil when the path is reduced to nothing.
// The Rust version takes a slice of enum Direction {NORTH, SOUTH, EAST, WEST}.


// LINK

// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript


// SOLUTION

function dirReduc(arr) {
  var opposite = { SOUTH: "NORTH", NORTH: "SOUTH", WEST: "EAST", EAST: "WEST" };
  return arr.reduce(function (a, b, i) {
    opposite[a.slice(-1)] === b ? a.pop() : a.push(b);
    return a;
  }, []);
}