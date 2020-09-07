/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
    var groups = makeGroups(n);
    var highestSumGroups = findHighestSum(groups);
    return highestSumGroups;
};

function makeGroups(n) {
    var groups = [];
    var i = 1;
    for(i;i<10;i++) {
        let arr = [];    
        arr.push(i);
        groups.push(arr);    
    }        
    while(i<=n) {
        var currGroupIndex = i % 10;
        groups[currGroupIndex].push(i);
        i++;
    }
    return groups;
}

function findHighestSum(groups) {
    var highestGroupLength = 0;
    var numHighGroups = 0;
    for(let currGroup of groups) {
        if(currGroup.length > highestGroupLength) {
            highestGroupLength = currGroup.length;
            numHighGroups = 1;
        } else if(currGroup.length === highestGroupLength) {
            numHighGroups += 1;
        } else {
            continue;
        }
    }
    return numHighGroups;
}

console.log(largestGroupsCount(11));