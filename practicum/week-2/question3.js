/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return [[1]]
  };
  let pascalArr = [];
  for (let i = 1; i <= n; i++) {
      let rowArr = [];
      for (let j = 0; j < i; j++) {
          if (j === 0 || j === i - 1) {
              rowArr.push(1);
          } else {
              rowArr.push((pascalArr[i-2][j-1] + pascalArr[i-2][j]));
          }
      }
      pascalArr.push(rowArr);
  }
  return pascalArr;
};
console.log(PascalTriangle(5));