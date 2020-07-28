// INSTRUCTIONS
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

// 2332
// 110011
// 54322345

// For a given number num, write a function which returns the number of numerical palindromes within each number. For this kata, single digit numbers will NOT be considered numerical palindromes.

// Return "Not valid" if the input is not an integer or is less than 0.

// LINK
// https://www.codewars.com/kata/58df62fe95923f7a7f0000cc/train/javascript


// SOLUTION

function palindrome(num) {
    if (!Number.isInteger(num) || num < 0) return "Not valid";
    const isPalindrome = num => String(num) === [...String(num)].reverse().join('');
    let count = 0;

    for (let i = 0; i <= String(num).length; i++) {
        for (let j = i + 2; j <= String(num).length; j++) {
            if (isPalindrome(('' + num).substring(i, j))) count++;
        }
    }

    return count;
}