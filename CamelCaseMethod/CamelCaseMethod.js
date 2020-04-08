// INSTRUCTIONS

// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord


// LINK

// https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript


// SOLUTION

String.prototype.camelCase = function () {
  return this.split(" ")
    .map((a) => a.charAt(0).toUpperCase() + a.slice(1))
    .join("");
};