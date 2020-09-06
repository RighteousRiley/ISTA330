/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
    var map = makeMap;
    console.log(map);
    var dInts = [];
    
};

function makeMap(input) {
    var map = new Map();
    for(let i=0;i<input.length;i++) {
        if (!(map.has(input[i]))) {
            map.set(input[i],1);
        } else {
            map.put(input[i], map.get(input[i]) + 1);
        }
    }
    return map;
}

console.log(d_integer([3,5,3,3,5,1]));