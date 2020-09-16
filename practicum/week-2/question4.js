/*
Given an array of integers, 
return true if the array contains any duplicates.
Your function should return true 
if any value appears at least twice 
in the array, 
and it should return false 
if every element is distinct.
 
Example:
 input: [19,1,1,23,23,4,3,23,1,2]
 output: true
*/

var hasDuplicates = function(input) {
        var sorted = bubbleSortAscending(input);
        return checkDup(sorted);
};

function bubbleSortAscending(input) {
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

function checkDup(input) {
    if (input.length === 0) {
        return false;
    } else if( input.length === 1) {
        return false;
    } else {
        if(input[0] === input[1]) {
            return true;
        } else {
            return hasDuplicates(input.slice(2));
        }
    }
}
console.log(hasDuplicates([19,1,1,23,23,4,3,23,1,2]));