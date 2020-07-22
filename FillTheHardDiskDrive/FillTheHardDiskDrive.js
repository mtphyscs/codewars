// INSTRUCTIONS
// Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.


// LINK

// https://www.codewars.com/kata/5d49c93d089c6e000ff8428c/train/javascript


// SOLUTION

function save(sizes, hd) {
  let total = 0;
  let count = 0;
  for (let file of sizes) {
    if (total + file <= hd) {
      total += file;
      count++;
    } else {
      return count;
    }
  }
  return count;
}