/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
    var commonLetters = 0;
    for(let i=0; i < B.length; i++) {
        let currLetter = B[i];
        if(A.includes(currLetter)) {
            commonLetters += 1;
        }
    }
    return commonLetters;
};
console.log(howManyCommon('gtY', 'iTygrtg'))