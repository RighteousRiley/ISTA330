/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    var mNum = Math.floor(input.length / 2);
    for(let i=0;i<input.length;i++) {
        var currNum = input[i];
        var currNumCount = 0;
        for(let j=i+1;j<input.length;j++) {
            if(currNum === input[j]) {
                currNumCount += 1;
            }
        }
        if (currNumCount >= mNum) {
            return currNum;
        }
    }
    return -1;
};
console.log(m_element([1,2,3,4,5,6,7,8]));