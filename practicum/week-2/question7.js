/*
Given a matrix M, return the transpose of M.

The transpose of a matrix is a 
new matrix whose rows are the columns 
of the original.

Example: 
input: [[1,2,3],[4,5,6]]
output: [[1,4], [2,5], [3,6]]

*/

var transpose = function(M) {
    var rows = findRows(M);
    var cols = findCols(M);
    return makeNewMatrix(rows, cols);
};

function findRows(M) {
    var rows = [];
    for(let i=0;i<M.length;i++) {
        rows.push(M[i]);
    }
    return rows;
}

function findCols(M) {
    var cols = [];
    for(let i=0;i<M[0].length;i++) {
        var currCol = [];
        for(let j=0;j<M.length;j++) {
            var currRow = j;
            currCol.push(M[currRow][i]);
        }
        cols.push(currCol);
    }
    return cols;
}

function makeNewMatrix(rows, cols) {
    var matrix = [];
    for(let i=0;i<cols.length;i++) {
        matrix.push(cols[i]);
    }
    return matrix;
}
console.log(transpose([[1,4,2],[5,3,6]]));