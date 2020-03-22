// INSTRUCTIONS

// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, function should returns 0



// LINK

// https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript




// SOLUTION


const sequenceSum = (begin, end, step) => {
    var sum = 0;
    for (var i = begin; i <= end; i += step){sum += i};
    return sum;
};
