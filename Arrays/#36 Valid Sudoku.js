// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Runtime: 76 ms
// Memory: 37.8 MB

var isValidSudoku = function(board) {
  var column = {};
  var grid = {};
  var quadrant;
  for (var i = 0; i < board.length; i++) {
    var rows = {};
    for (var j = 0; j < board[i].length; j++) {
      if (i <= 2) {
        if (j <= 2) {
          quadrant = 0;
        } else if (j <= 5) {
          quadrant = 1;
        } else {
          quadrant = 2;
        }
      } else if (i <= 5) {
        if (j <= 2) {
          quadrant = 3;
        } else if (j <= 5) {
          quadrant = 4;
        } else {
          quadrant = 5;
        }
      } else {
        if (j <= 2) {
          quadrant = 6;
        } else if (j <= 5) {
          quadrant = 7;
        } else {
          quadrant = 8;
        }
      }
      if (board[i][j] !== '.') {
        if (!rows[board[i][j]]) {
          rows[board[i][j]] = true;
        } else {
          return false;
        }
        if (!column[j]) {
          column[j] = {};
        }
        if (!column[j][board[i][j]]) {
          column[j][board[i][j]] = true
        } else {
          return false;
        }
        if (!grid[quadrant]) {
          grid[quadrant] = {};
        }
        if (!grid[quadrant][board[i][j]]) {
          grid[quadrant][board[i][j]] = true;
        } else {
          return false;
        }
      }
    }
  }
  return true;
};

var test = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]
var test2 = [
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]
console.log((isValidSudoku(test)))
console.log((isValidSudoku(test2)))