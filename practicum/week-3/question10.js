/*
Given a string, determine if it is a palindrome, 
considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this question, 
we define empty string as valid palindrome.

Example:
input: 'Was it a car or a cat I saw'
output: true
*/

var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/ /gi, "");
    s = s.replace("?", "");
    var reversed = "";
    for(let i = s.length;i>=0;i--) {
        reversed += s.charAt(i);
    }
    console.log(s, reversed)
    return reversed == s;
};
console.log(isPalindrome("Was it a car or a cat I saw?"));
