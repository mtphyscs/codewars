// INSTRUCTIONS

// For a given array of integers, construct a square matrix A with side length equal to the length of array, where A[i, j] is equal to the sum of all elements of the array with indexes between i and j, inclusive.


// LINK

// https://www.codewars.com/kata/59080216d296b7fc1d00006a/train/javascript


// SOLUTIONS

function segmentSumsMatrix(arr) {
    var out = [];
    for (var i = 0; i < arr.length; i++) {
        var row = []
        for (var j = 0; j < arr.length; j++) {
            var temp = arr.slice(Math.min(i, j), Math.max(i, j)+1).reduce((s, v) => s += v, 0)
            row.push(temp)
        }
        out.push(row)
    }
    return out;
}