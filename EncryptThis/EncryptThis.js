// INSTRUCTIONS

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter needs to be converted to its ASCII code.
// The second letter needs to be switched with the last letter
// Keepin' it simple: There are no special characters in input.


// LINK

// https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript


// SOLUTION

const encryptThis = (text) =>
  text
    .split(" ")
    .map((w) =>
      w.length > 2
        ? `${w[0]}${w[w.length - 1]}${w.slice(2, w.length - 1)}${w[1]}`
        : w
    )
    .map((w) => (w.length ? w.replace(/^./, ($1) => $1.charCodeAt(0)) : w))
    .join(" ");