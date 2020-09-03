/*
Given an array of 2n numbers, group the numbers into n pairs of integer,
such that the sum of the minimum of each pair is the largest.

Example: 
input: [4, 3, 8, 0]
output: 4
       because we can make the following pairs: (4, 8) and (3, 0) and 
       min(4,8) + min(3,0) = 4
       whatever other pairs we choose the sum of the minimums will not exceed 4.
*/

// all possible pairs
var maxSumOfMins = function(input) {
       var possiblePairs = [];
       var maxMin = 0;
       for(let i=0;i<input.length;i++) {
              for(let j=0;j<input.length;j++) {
                     if(input[i] !== input[j]) {
                            possiblePairs.push({x:input[i], y:input[j]});
                     }
              }
       }
       console.log(possiblePairs);
       for(let i=0;i<possiblePairs.length;i++) {
              var firstPair = possiblePairs[i];
              for(let j=1;j<possiblePairs.length;j++) {
                     var secondPair = possiblePairs[j];
                     if (firstPair.x === secondPair.x || firstPair.x === secondPair.y) {
                            continue;
                     }
                     if (firstPair.y === secondPair.x || firstPair.y === secondPair.y) {
                            continue;
                     }
                     if(firstPair.x < firstPair.y) {
                            firstPairMin = firstPair.x;
                     } else {
                            firstPairMin = firstPair.y
                     } if(secondPair.x < secondPair.y) {
                            secondPairMin = secondPair.x;
                     } else {
                            secondPairMin = secondPair.y
                     }
                     var minSum = firstPairMin + secondPairMin;
                     if(minSum > maxMin) {
                            maxMin = minSum;
                     }
              }
       }
       return maxMin;
};
console.log(maxSumOfMins([4,3,8,0]));