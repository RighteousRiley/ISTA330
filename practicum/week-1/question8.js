/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function(input) {
    var output = [];
    for(let i=0;i<input.length;i++) {
        var count = 0;
        var currNumI = input[i];
        for(let j=0;j<input.length;j++) {
            var currNumJ = input[j];
            if (currNumJ % 2 === 0 && currNumJ > currNumI) {
                count += 1;
            }
        }
        output.push(count);
    }
    return output;
};