/*
A zero-indexed array A of length N 
contains all integers from 0 to N-1. 
Find and return the longest length of set S, 
where S[i] = {A[i], A[A[i]], A[A[A[i]]], ... } 
subjected to the rule below:

Suppose the first element in S starts with 
the selection of element A[i] of index = i, 
the next element in S should be A[A[i]], 
and then A[A[A[i]]]… Then you should stop 
adding elements to S just before a duplicate element 
occurs in S.

Example: 
input: A = [5,4,0,3,1,6,2]
output:  4
     because the longest S is:
     S = {A[0], A[A[0]], A[A[A[0]]], A[A[A[A[0]]]]}
     A[0] = 5
     A[A[0]] = A[5] = 6
     A[A[A[0]]] = A[6] = 2
     A[A[A[A[0]]]] = A[2] = 0
     but A[A[A[A[A[0]]]]] = A[0] = 5 which is a duplicate.
*/
function recurveSolver(input, soFar, index) {
     if(input[soFar.length-1] in soFar) {
          return soFar.length + 1;
     } else {
          soFar.push(input[soFar.length-1]);
          return recurveSolver(input, soFar, index); 
     }
}
var longestNested = function(A) {
     var longest = 0;
     for(let i=0; i<A.length;i++) {
          var solverReturn = recurveSolver(A, [], i);
          if(solverReturn > longest) {
               longest = solverReturn;
          }
     }
     return longest;
};
console.log(longestNested([4,3,2,0,1]));

