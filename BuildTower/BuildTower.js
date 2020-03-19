// INSTRUCTIONS 
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// JavaScript: returns an Array;
// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]



// LINK

// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript



// SOLUTION

function towerBuilder(n) {
    var array=[];
    for(var i = 0; i < n; i++){
     array[i]= " ";
    //array element
    //star #of star for each floor 2*i+1
    //the length of the string element  2*n-1
    //the # of empty spaces: difference 2*n-1-(2*i+1)=2*(n-i-1) 
    //spaces are on both side: on the left  0+n-i-1-1=n-i-2 (0, n-i-1)  //
     //on the right (-(n-i-1)) or 2n-1-(n-i-1)=n+i ;
     for(var j=0; j < n - i - 1; j++){
       array[i] += " ";
     }
     for(var m= n-i-1; m < n + i; m++){
       array[i] += "*";
     }
     for(var p= n+i; p< 2* n - 1; p++){
       array[i] += " ";
     }
    }
    return array;
  }