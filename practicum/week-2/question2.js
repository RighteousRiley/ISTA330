
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
        var subArrays = findSubArrays(input);
        return findLargestSubArray(subArrays);
 };

 function findSubArrays(input) {
        var subArrays = [];
        for(let i=0;i<input.length;i++) {
                for(let j=i;j<input.length+1;j++) {
                        subArrays.push(input.slice(i,j));
                }
        }
        return subArrays;
 }

 function findLargestSubArray(input) {
         var maxSum = 0;
         for(let i=0;i<input.length;i++) {
                 var currArr = input[i];
                 var currArrSum = 0;
                 for(let j=0;j<currArr.length;j++) {
                        currArrSum += currArr[j];
                 }
                 if (currArrSum > maxSum) {
                         maxSum = currArrSum;
                 }
         }
         return maxSum;
 }
 console.log(largestSubarray([-17,3,1,5,-9,-1,10]));