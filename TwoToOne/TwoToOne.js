// INSTRUCTIONS
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2.

// LINK 
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

// SOLUTION

function longest(s1, s2) {
    var result = "";
    
    for (var i=0; i<s1.length; i++) {
      if( result.indexOf(s1[i]) === -1) {
        result += s1[i];
      }
    }
    
    for (var i=0; i<s2.length; i++) {
      if( result.indexOf(s2[i]) === -1) {
        result += s2[i];
      }
    }
    
    return result.split('').sort().join(''); 
  }