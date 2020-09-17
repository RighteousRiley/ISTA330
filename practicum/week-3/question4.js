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
  powerSet = [];
  for(i=0;i<input.length-1;i++) {
    curr = input[i];
    powerSet.push([curr]);
  }
  for(i=0;i<=input.length;i++) {
    set = input.slice(i);
    if(!(powerSet.includes(set))) {
      powerSet.push(set);
    }
      for(j=i+1;j<input.length-1;j++) {
        set = [input[i], input[j]];
        if(!(powerSet.includes(set))) {
          powerSet.push(set);
        }
      }
  }
  powerSet.pop();
  return powerSet;
};
console.log(powerSet([1,2]));