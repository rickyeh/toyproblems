function spiralTraversal (matrix) {

  var result = [];
  var maxRow = matrix.length;
  var maxCol = matrix[0].length;

  function walk(row, col, direction) {

    result.push(matrix[row][col]);
    matrix[row][col] = null;

    switch (direction) {
      case 'right':
        if (col + 1 < maxCol) {
          if (matrix[row][col + 1] !== null) {
            walk(row, col + 1, 'right');
          }
        }
        if(row + 1 < maxRow) {
          if (matrix[row + 1][col] !== null) {
            walk(row + 1, col, 'down');
          }
        } else {
          return;
        }
      break;

      case 'down':
        if (row + 1 < maxRow) {
          if (matrix[row + 1][col] !== null) {
            walk(row + 1, col, 'down');
          }
        }
        if(col - 1 >= 0 ) {
          if (matrix[row][col - 1] !== null) {
            walk(row, col - 1 , 'left');
          }
        } else {
          return;
        }
      break;

      case 'left':
        if (col - 1 >= 0) {
          if (matrix[row][col - 1] !== null) {
            walk(row, col - 1, 'left');
          }
        }
        if (row - 1 >= 0) {
          if (matrix[row - 1][col] !== null) {
            walk(row - 1, col, 'up');
          }
        } else {
          return;
        }
        break;

      case 'up':
        if (row - 1 >= 0) {
          if (matrix[row - 1][col] !== null) {
            walk(row - 1, col, 'up');
          }
        }
        if(col + 1 < maxCol) {
          if (matrix[row][col + 1] !== null) {
            walk(row, col + 1, 'right');
          }
        } else {
          return;
        }
      break;
    }
  }

  walk(0, 0, 'right');
  return result;
}

var matrix1 = [[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]];

var matrix2 = [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ], [ 16, 17, 18, 19, 20 ], [ 21, 22, 23, 24, 25 ] ];

spiralTraversal(matrix2);