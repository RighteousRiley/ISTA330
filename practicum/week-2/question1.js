/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function(input) {
   var max = Math.max.apply(null, input);
   for(let i=0; i<input.length;i++) {
           var currNum = input[i];
           if(currNum * 2 > max && currNum != max) {
                return false;
           }
   }
   return true;
};
console.log(largestNumberIsAtLeastTwice([3,2,21,50]));