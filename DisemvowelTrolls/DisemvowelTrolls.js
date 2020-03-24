// INSTRUCTIONS


// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.



// LINK

// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript



// SOLUTION


function disemvowel(str) {
    let vowels = "aiueoAIUEO";
    let finalStr = '';

    for (i = 0; i <= str.length - 1; i++) {
        if (vowels.indexOf(str[i]) == -1) {
            finalStr += str[i];
        }

    }

    return finalStr;
}



console.log(disemvowel("no vowels no trolls"));

