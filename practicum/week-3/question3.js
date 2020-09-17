/*
Given an array input of 0s and 1s and an integer k, 
return true if all ones(1s) are at least k places away from each other, 
otherwise return false.

Example:
input: input = [1,0,0,0,1,0,0,1], k = 2
"1 0 0 0 1 0 0 1"
output: true
*/

var kStepAway = function(input, k) {
    splitList = input.join("").split("1");
    console.log(splitList);
    for(let substr of splitList) {
        if(substr.length < k && substr != '') {
            return false;
        }
    }
    return true;
};
console.log(kStepAway([1,0,0,1,0,1], 2));