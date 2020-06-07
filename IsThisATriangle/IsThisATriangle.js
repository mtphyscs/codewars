// INSTRUCTIONS

// Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.


// LINK

// https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript


// SOLUTION

function isTriangle(a, b, c) {
    [a, b, c] = [a, b, c].sort((x, y) => x - y);

    return a + b > c;
}