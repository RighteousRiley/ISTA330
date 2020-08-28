/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9, 5]
output: 3 
*/

var median = function(input) {
    if(input.length === 0) {
        return 0;
    } else if(input.length % 2 === 0) {
        var firstElementIndex = (input.length - 1) / 2;
        var secondElementIndex = firstElementIndex + 1;
        return (input[firstElementIndex] + input[secondElementIndex]) / 2.0
    } else {
        return input[(input.length - 1) / 2];
    }
};
console.log(median);