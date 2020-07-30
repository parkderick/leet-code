// You're given a two-dimensional of distinct integers and a target integer. Each row in the matrix is sorted, and each column is also sorted; the matrix doesn't necessarily have the same height and width. Write a funciton that returns an array of the row and column indicies of the target integer if its contained in the matrix, otherwise return [-1,-1]

// Time: O(n + m) where n is the length of the matrix's rows and m is the length of the columns
// Space: O(1)

function searchInSortedMatrix(matrix, target) {
  var row = 0;
  var col = matrix[0].length - 1;

  while (row <= matrix.length && col >= 0) {
    if (matrix[row][col] > target) {
      col--;
    } else if (matrix[row][col] < target) {
      row++;
    } else {
      return [row, col]
    }
  }
  return [-1, -1]
}
