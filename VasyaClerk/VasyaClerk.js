// INSTRUCTIONS

// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.


// LINK

// https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/train/javascript


// SOLUTION

function tickets(peopleInLine) {
  let arr = [0, 0];
  for (var i = 0; i < peopleInLine.length; i++) {
    switch (peopleInLine[i]) {
      case 25:
        arr[0]++;
        break;
      case 50:
        [arr[0]--, arr[1]++];
        break;
      default:
        arr[1] ? arr[1]-- : (arr[0] -= 2);
        arr[0]--;
        break;
    }
    if (arr[0] < 0) {
      return "NO";
    }
  }
  return "YES";
}