
/*
Given an array of integers, 1 ≤ input[i] ≤ n (n = size of array), 
some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Example: input: [19,3,2,10,8,2,3,5]
         output: [2,3]
                
          */
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
 var findDuplicates = function(input) {
    bubbleSort(input);
    dups = [];
    for(i=0;i<input.length-1;i++) {
        if((input[i] in input.slice(i+1)) && !(dups.includes(input[i]))) {
            dups.push(input[i]);
        }
    }
    return dups;
 };
console.log(findDuplicates([-17,3,1,5,-9,1,10]));