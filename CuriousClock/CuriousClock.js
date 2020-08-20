// INSTRUCTIONS 

// Benjamin recently bought a digital clock at a magic trick shop. The seller never told Ben what was so special about it, but mentioned that one day Benjamin would be faced with a surprise.

// Indeed, the clock did surprise Benjamin: without warning, at someTime the clock suddenly started going in the opposite direction! Unfortunately, Benjamin has an important meeting very soon, and knows that at leavingTime he should leave the house so as to not be late. Ben spent all his money on the clock, so has to figure out what time his clock will show when it's time to leave.

// Given the someTime at which the clock started to go backwards, find out what time will be shown on the curious clock at leavingTime.

// For your convenience, here is the list of months lengths (from January to December, respectively):

// Months lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31. Please, note that in leap years February has 29 days.



// LINK
// https://www.codewars.com/kata/5898126a338749e7e5000063/train/javascript


// SOLUTION

function curiousClock(someTime, leavingTime) {
    var st =  new Date(someTime).valueOf();
    var lt =  new Date(leavingTime).valueOf();
    var res = new Date(st+(st-lt));
    var mo = (res.getMonth()+1)>9 ? (res.getMonth()+1):'0'+(res.getMonth()+1);
    var d = res.getDate()>9 ? res.getDate():'0'+res.getDate();
    var h = res.getHours()>9 ? res.getHours():'0'+res.getHours();
    var m = res.getMinutes()>9 ? res.getMinutes():'0'+res.getMinutes();
    return `${res.getFullYear()}-${mo}-${d} ${h}:${m}`;
    }