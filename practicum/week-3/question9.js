/*
Given an array of integers A, 
a move consists of choosing any A[i], 
and incrementing it by 1.

Return the least number of moves to make every value in A unique.

Example:
input: [1,2,2]
output: 1
*/
function isUnique(input) {
    soFar = [];
    for(let i of input) {
        if(soFar.includes(i)) {
            return false;
        } else {
            soFar.push(i);
        }
    }
    return true;
}

function findFrequency(input) {
    var output = {};
    for(let i=0;i<input.length;i++) {
        let key = input[i];
        if(output[key] === undefined) {
            output[key] = 1;
        } else {
            let value = output[key];
            output[key] = value + 1;
        }
    }
    return output;
}

var minMoves = function(A) {
    var moves = 0;
    var freqMap = findFrequency(A);
    var removed = 0;
    for(let i=0; i < 100000;i++) {
        let frequency = freqMap[i];
        if(frequency >= 2) {
            removed += (frequency - 1);
            moves -= (i * frequency);
        }
        if(removed > 0 && frequency == 0) {
            removed--;
            moves += i;
        }
    }
    
    return moves * -1;
};
console.log(minMoves( [3,2,1,2,1,7] ));
