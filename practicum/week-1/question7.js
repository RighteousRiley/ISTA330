/*
Given an array of 2n numbers, group the numbers into n pairs of integer,
such that the sum of the minimum of each pair is the largest.

Example: 
input: [4, 3, 8, 0] 8,7,6,5,4,3,2,1
output: 4
       because we can make the following pairs: (4, 8) and (3, 0) and 
       min(4,8) + min(3,0) = 4
       whatever other pairs we choose the sum of the minimums will not exceed 4.
*/

// all possible pairs
var maxSumOfMins = function(input) {
       var sortedInput = bubbleSort(input);
       var minSum = 0;
       for(let i=0; i<sortedInput.length;i+=2) {
              minSum += sortedInput[i];
       }
       return minSum;
};

function bubbleSort(input) {
       var length = input.length;
       for (var i = length-1; i >= 0; i--){
              for(var j = 1; j <= i; j++){
                     if(input[j-1] > input[j]){
                     var item = input[j-1];
                     input[j-1] = input[j];
                     input[j] = item;
              }
       }
    }
    return input;
}
