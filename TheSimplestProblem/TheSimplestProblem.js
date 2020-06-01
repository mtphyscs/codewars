// INSTRUCTIONS

// You are given a 2D integer array ratings. Each subarray represents the complexity rating of a jury member. i.e. [1,1,1,2]. It means that there are total 4 problems, and the jury member gave complexity rating 1,1,1,2 for each problem. All the subarray have the same length.

// Your task is to compare all the ratings, find out the simpleset problem, return their index(0-based) using an array(in ascending order). If no simplest problem found, return an empty array.


// LINK

// https://www.codewars.com/kata/5a0b9d8232b8b90c2d000087/train/javascript


// SOLUTION

function simplestProblem(ratings) {
  var easiest = ratings[0].map((v) => 0);
  var hardest = ratings[0].map((v) => 0);
  for (member of ratings) {
    var a = Math.min(...member);
    var b = Math.max(...member);
    for (var i = 0; i < member.length; i++) {
      if (member[i] === a) easiest[i]++;
      if (member[i] === b) hardest[i]++;
    }
  }
  var indexes = easiest
    .map((v, i) => [i, v])
    .filter((v) => v[1] > ratings.length / 2)
    .map((v) => [v[0], hardest[v[0]]]);
  return indexes.filter((v) => v[1] === 0).map((v) => v[0]);
}
