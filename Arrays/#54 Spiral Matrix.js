// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]

// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// Time: O(n)
// Space: O(n)

// Runtime: 64 ms (+51.07%)
// Memory: 32.9 MB (+88.44%)

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

console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
  ]))