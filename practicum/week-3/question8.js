/*
Given an array with n objects colored red, white or blue, 
sort them in-place(refer to https://en.wikipedia.org/wiki/In-place_algorithm) so that objects of the same color are adjacent, 
with the colors in the order red, white and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not supposed to use the library's sort function for this question.

Example:
input:  [2,0,2,1,1,0]
output: [0,0,1,1,2,2]
*/
function recurveCheck(input) {
    if(input.length < 2) {
        return false;
    } else if(input.length == 2) {
        return input[0] <= input[1];
    } else {
        if (!(input[0] <= input[1])) {
            return false;
        } else {
            return recurveCheck(input.slice(1));
        }
    }
}
var sortColors = function(input) {
    while(recurveCheck(input) != true) {
        for(let i=0;i<input.length-1;i++) {
            let first = input[i];
            let second = input[i+1];
            if(first > second) {
                temp = first;
                input[i] = input[i+1];
                input[i+1] = temp;
            }
        }
    }
    return input;
};
console.log(sortColors([0,1,2,1,1,2]));