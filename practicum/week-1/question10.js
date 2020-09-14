/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    n = n.toString();
    var max = 0;
    var min = 10;
    for(let i=0;i<n.length;i++) {
        var currNum = parseInt(n[i]);
        console.log(currNum);
        if (currNum > max) {
            max = currNum;
        } else if(currNum < min) {
            min = currNum;
        } else {
            continue;
        }
    }
    return max - min;
};