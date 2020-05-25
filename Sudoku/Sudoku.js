// INSTRUCTIONS

// Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'


// LINK

// https://www.codewars.com/kata/53db96041f1a7d32dc0004d2/train/javascript


// SOLUTION

let done = [1, 0, 1, 0, 0, 0];

function doneOrNot() {
  return done.shift() ? "Finished!" : "Try again!";
}