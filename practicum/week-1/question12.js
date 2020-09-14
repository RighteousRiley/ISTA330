/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

  
A substring is balanced if it has equal number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'
*/

var maxBalanceNumber = function(input) {
  var partitionsList = findPartitions(input);
  var maxBalNum = 0;
  for(let i=0;i < partitionsList.length;i++) {
    var currPart = partitionsList[i];
    var currPartBalNum = findBalancedStrings(currPart).length;
    if(currPartBalNum > maxBalNum) {
      maxBalNum = currPartBalNum;
    }
  }
  return maxBalNum-1;
};

function findPartitions(input) {
  var partitionList = [];
  var len = input.length;
  for(let i=0; i<len;i++) {
    var partition = [];
    for(let j=len; j>=0; j--) {
      partition.push(input.substring(i,j))
    }
    partitionList.push(partition);
  }
  return partitionList;
}

function findBalancedStrings(subArray) {
  var balancedStrings = [];
  for(let i=0;i<subArray.length;i++) {
    var currStr = subArray[i];
      if (isBalanced(currStr)) {
        balancedStrings.push(currStr);
      }
  }
  return balancedStrings;
}

function isBalanced(str) {
  var aCount = 0;
  var bCount = 0;
  for(let i=0; i<str.length;i++) {
    var currChar = str.charAt(i);
    if (currChar === 'a') {
      aCount += 1;
    } else {
      bCount += 1;
    }
  }
  return (aCount === bCount);
}
