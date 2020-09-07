/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {
    var minDiff = findMinDiff(input);
    return findPossiblePairs(input, minDiff);
};

function findPossiblePairs(input,minDiff) {
    var pairs = [];
    for(let i=0;i<input.length;i++) {
        var firstNum = input[i];
        for(let j=1;j<input.length;j++) {
            var secondNum = input[j];
            var diff = Math.abs(secondNum - firstNum);
            if(diff === minDiff) {
                var sortedPair = bubbleSort([firstNum, secondNum]);
                if(!hasPairs(pairs, sortedPair)) {
                    pairs.push(sortedPair);
                }
            }
        }
    }
    return pairs;
}
function hasPairs(pairList, toCheck) {
    for(let currPair of pairList) {
        if(currPair[0] === toCheck[0] && currPair[1] === toCheck[1]) {
            return true;
        }
    }
    return false;
}
function findMinDiff(input) {
    var minDiff = 10000;
    for(let i=0;i<input.length;i++) {
        var firstNum = input[i];
        for(let j=1;j<input.length;j++) {
            var secondNum = input[j];
            var diff = Math.abs(secondNum - firstNum);
            if(firstNum < secondNum &&  diff <= minDiff) {
                minDiff = diff;
            }
        }
    }
    return minDiff;
}
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

console.log(minPairs([17,-5,-1,24,29,54,1]));