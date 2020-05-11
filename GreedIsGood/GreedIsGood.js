// INSTRUCTIONS

// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// LINK

// https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript


// SOLUTION

function score(dice) {
  var total = 0;

  for (var i = 0; i < 6; i++) {
    total += score2(i + 1, count(i + 1, dice));
  }

  return total;
}

function count(search, dataset) {
  var count = dataset.reduce(function (n, val) {
    return n + (val === search);
  }, 0);

  return count;
}

function score2(n, c) {
  var total = 0;

  if (n === 1 && c >= 3) {
    total += 1000;
    c -= 3;
  } else if (c >= 3) {
    total += n * 100;
    c -= 3;
  }

  if (n === 1) total += c * 100;

  if (n === 5) total += c * 50;

  return total;
}

a = [5, 5, 5, 5, 5];
a = [6, 6, 6, 6, 6];

score(a);
  