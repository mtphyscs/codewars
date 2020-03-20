// INSTRUCTIONS

// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!

// Examples:

// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
// Write two methods:

// function encrypt(text, n)
// function decrypt(encryptedText, n)
// For both methods:
// If the input-string is null or empty return exactly this value!
// If n is <= 0 then return the input text.

// LINK
// https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript


// SOLUTION

function encrypt(text, n) {
    var firstChars = '';
    var secondChars = '';
    var encryptedStr = text;
    if(n <= 0 || text === null) {
      return encryptedStr;
    } else {
      for(var i = 0; i < text.length; i++) {
        if(i % 2) {
          secondChars += text[i];
        } else {
          firstChars += text[i];
        }
      }
      encryptedStr = secondChars + firstChars;
      return encrypt(encryptedStr, n - 1);
    }
  }
  
  console.log(encrypt("This is a test!", 1));
  
  function decrypt(encryptedText, n) {
    var decryptedStr = encryptedText;
    if(n <= 0 || encryptedText === null) {
      return decryptedStr;
    } else {
      var midPoint = Math.floor(encryptedText.length / 2);
      var secondChars = encryptedText.slice(0, midPoint);
      var firstChars = encryptedText.slice(midPoint);
      decryptedStr = '';
      var stopLoop = firstChars.length;
      for(var i = 0; i < stopLoop; i++) {
        if(secondChars[i] === undefined) {
          decryptedStr += firstChars[i];
        } else {
          decryptedStr += firstChars[i] + secondChars[i];
        }
      }
      return decrypt(decryptedStr, n - 1);
    }
  }
  
  
  decrypt("el!hlo", 1);
  