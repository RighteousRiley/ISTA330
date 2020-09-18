/*
Given an array input of n integers
 where n > 1,  
 return an array output such that 
 output[i] is equal to the product of all the elements of input except input[i].

Example: 
input: [1,2,3,4]
output: [24,12,8,6]
*/

var productOfOthers = function(input) {
    var output = [];
    for(let i=0;i<input.length;i++) {
        var product = 1;
        for(let j of input) {
            if(input[i] != j) {
                product = product * j;
            }
        }
        output[i] = product;
    }
    return output;
};
console.log(productOfOthers([7,10,5]))
