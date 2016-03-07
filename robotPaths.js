function robotPaths (n) {

  var board = makeBoard(n);
  var solutionCount = 0;

  var row = 0;
  var col = 0;

  walk(row, col);

  function walk(row, col) {
    if (row === (n - 1) && col === (n - 1)) {
      console.log('Solution Found');
      solutionCount++;
      return;
    }
    board.togglePiece(row,col);

    // Right
    if (isValid(row, col+1)) {
      console.log('Walking Right');
      walk(row, col+1);
    }
    // Down
    if (isValid(row+1, col)) {
      console.log('Walking down');
      walk(row+1, col);
    }
    // Left
    if (isValid(row, col-1)) {
      console.log('Walking left');

      walk(row, col-1);
    }
    // Up
    if (isValid(row-1, col)) {
      console.log('Walking up');
      walk(row-1, col);
    }
    board.togglePiece(row,col);
  }


  function isValid(row, col) {
    console.log('Checking - Row: ' + row + ' Col: ' + col);
    if (row < 0 || col < 0) {
      return false;
    } else if (row >= n || col >= n) {
      return false;
    } else if (board.hasBeenVisited(row, col)) {
      console.log('Hit visited square');
      return false;
    }
    return true;
  }

  console.log('***Solution Count*** : ', solutionCount);
  return solutionCount;
}

robotPaths(5);


function makeBoard(n) {
  var board = []
  for (var i = 0; i < n; i++) {
    board.push([])
    for (var j = 0; j < n; j++) {
      board[i].push(false)
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j]
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j]
  }
  return board
}

function showBoard(board) {
  for(var i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}