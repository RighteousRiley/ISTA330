/*
Given an integer n, return difference between the maximum and the minimum of its digits.

Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    n = toString(n);
    var numArray = [];
    for(let i=0;i<n.length;i++) {
        numArray.push(parseInt(n.charAt(i)));
    }
    return Math.max(numArray) - Math.min(numArray);
};