/*
Given a set of distinct integers, input, 
return all possible subsets (the power set).

The solution set must not contain duplicate subsets.
 
Example:
 input: [1,2,3]
 output: [
  [],   
  [1],
  [2],
  [3],  
  [1,3],
  [2,3],
  [1,2],
  [1,2,3]
]
*/

var powerSet = function(input) {
  var powerSet = [[]];
  var allSet = [];
  for(var i=0;i<input.length;i++) {9
    var currSet = [];
    var currI = input[i];
    currSet.push(currI);
    if(!(powerSet.includes(currSet))) {
      powerSet.push(currSet);
    }
    allSet.push(currI);
    
    for(var j=i+1; j<input.length;j++) {
      currSet = [];
      currSet.push(currI);
      currSet.push(input[j]);
      if(!(powerSet.includes(currSet))) {
        powerSet.push(currSet);
      }
    }
  }
  if(powerSet[powerSet.length-1].length >= 2) {
    powerSet.pop();
  }
  return powerSet
};
console.log(powerSet([1,2]));
