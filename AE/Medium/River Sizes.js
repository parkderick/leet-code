// YOu're given a two-dimesional array of potentionally unequal height and width containing only 0s and 1s. Each 0 represents land, and each 1 represents a river. A river consists of any number of 1s that are either horizontally orvertically adjacent. The number of adjancent 1s forming a river determin its size.

// Write a function that returns an array of all rivers represented in the input matrix. The sizes don't need to be in any particular order.

// Runtime: O(wh) where w and h are the width and height of the input matrix.
// Space: O(wh)

function riverSizes(matrix) {
	var result = [];
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[i].length; j++) {
		  if (matrix[i][j]) {
				var size = 0;
				var recurse = (row, col) => {
					matrix[row][col] = 0;
					size++;
					if (matrix[row][col-1]) {
						recurse(row, col-1);
					}
					if (matrix[row+1] && matrix[row+1][col]) {
						recurse(row+1, col);
					}
					if (matrix[row][col+1]) {
						recurse(row, col+1);
					}
					if (matrix[row-1] && matrix[row-1][col]) {
						recurse(row-1, col);
					}

				}
				recurse(i, j);
				result.push(size);
			}
		}
	}
	return result;
}