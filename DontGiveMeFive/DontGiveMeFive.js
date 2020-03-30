// INSTRUCTIONS


// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!




// LINK


// https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript




// SOLUTION


function dontGiveMeFive(start, end) {
  return Array.from(Array(end - start + 1), (e, i) => i + start).filter(
    e => ("" + e).indexOf("5") === -1
  ).length;
}


