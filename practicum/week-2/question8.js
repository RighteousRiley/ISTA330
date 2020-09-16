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
    var map = makeMap(input);
    var dIntsOrdered = bubbleSortDescending(findDInts(map));
    if(dIntsOrdered.length >= 1) {
        return dIntsOrdered[0];
    }
    return -1;
};

function makeMap(input) {
    var map = new Map();
    for(let i=0;i<input.length;i++) {
        if (!(map.has(input[i]))) {
            map.set(input[i],1);
        } else {
            map.set(input[i], map.get(input[i]) + 1);
        }
    }
    return map;
}

function bubbleSortDescending(input) {
    var length = input.length;
    for (var i = length-1; i >= 0; i--){
           for(var j = 1; j <= i; j++){
                  if(input[j-1] < input[j]){
                  var item = input[j-1];
                  input[j-1] = input[j];
                  input[j] = item;
           }
    }
 }
 return input;
}

function findDInts(map) {
    var dInts = [];
    for(let key of map.keys()) {
        if(key === map.get(key)) {
            dInts.push(key);
        }
    }
    return dInts;
}
console.log(d_integer([3,5,3,3,5,1]));