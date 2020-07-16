// INSTRUCTIONS
// Write a function that accepts fight string consists of only small letters and * which means a bomb drop place. Return who wins the fight after bombs are exploded. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.


// LINK
// https://www.codewars.com/kata/5938f5b606c3033f4700015a/train/javascript


// SOLUTION

function alphabetWar(fight) {
  const warriors = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
    m: -4,
    q: -3,
    d: -2,
    z: -1,
  };
  let result = fight
    .replace(/\w?[*]\w?/g, "")
    .split("")
    .reduce((a, b) => a + (warriors[b] || 0), 0);

  return result > 0
    ? "Left side wins!"
    : result < 0
    ? "Right side wins!"
    : "Let's fight again!";
}
