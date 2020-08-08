// Write a function that takes in an n x m two-dimensional array (that can be square-shaped when n==m) and returns a one-dimensional array of all the array's elements in zigzag order.
// Zigzag order starts at the top left corner of the two-dimensional array, goes down by one Element, and proceeds in a Zigzag pattern all the way to the bottom right corner

// Time: O(n)
// Space: O(n)

function zigzagTraverse(array) {
	var result = [array[0][0]];
	var row = 0;
	var col = 0;
	while (array[row+1] || array[row][col+1]) {
		//Down
		if (array[row+1] && array[row+1][col]) {
			row++;
			result.push(array[row][col]);
		} else if (array[row][col+1]) {
			col++;
			result.push(array[row][col])
		}
		
		//Bottom Left to Top Right
		while (array[row-1] && array[row-1][col+1]) {
			row--;
			col++;
			result.push(array[row][col]);
		}
		
		// Right
		if (array[row][col+1]) {
			col++;
			result.push(array[row][col])
		} else if (array[row+1] && array[row+1][col]) {
			row++;
			result.push(array[row][col])
		}
		
		// Bottom Right to Top Left
		while (array[row+1] && array[row+1][col-1]) {
			row++;
			col--;
			result.push(array[row][col]);
		}
	}
	return result;
}