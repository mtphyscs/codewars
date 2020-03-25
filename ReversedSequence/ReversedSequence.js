// INSTRUCTIONS

// Get the number n (n>0) to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]



// LINK

// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript



// SOLUTION

const reverseSeq = n => {
    var arr = [];
    for (i = n; i > 0; i--){
      arr.push(i);
    }
    return arr;
  };
