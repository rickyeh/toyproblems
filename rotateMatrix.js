function rotateMatrix(matrix) {

  var n;
  var result = [];

  if (Array.isArray(matrix)) {
    n = matrix[0].length;
  }

  for (var i = 0; i < n; i++) {
    result.push(new Array());
  }

  // Double for loop through each value in matrix
  // Save the value
  // new x = old y
  // new y = n-1 - x

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      var savedValue = matrix[i][j];
      result[j][(n - 1) - i] = savedValue;
    }
  }

  return result;
}

matrix1 = [
  [1, 2],
  [3, 4]
];

rotateMatrix(matrix1);