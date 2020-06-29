// Write a function that takes in an n x m two-dimensional array (that can be square-shaped when n === m) and returns a one-dimensional array of all the array's elements in spiral order.

// Time: O(n)
// Space: O(n)

function spiralTraverse(array) {
	var startCol = 0;
	var startRow = 0;
	var endCol = array[0].length - 1;
	var endRow = array.length - 1;
	var result = [];

	while (startCol <= endCol && startRow <= endRow) {
		for (var i = startCol; i <= endCol; i++) {
			result.push(array[startRow][i]);
		}
		for (var i = startRow+1; i <= endRow; i++) {
			result.push(array[i][endCol]);
		}
		for (var i = endCol-1; i >= startCol; i--) {
			if (startRow === endRow) {
				break;
			}
			result.push(array[endRow][i]);
		}
		for (var i = endRow-1; i > startRow; i--) {
			if (startCol === endCol) {
				break;
			}
			result.push(array[i][startCol]);
		}
		
		startCol++;
		startRow++;
		endCol--;
		endRow--;
	}
	return result
}