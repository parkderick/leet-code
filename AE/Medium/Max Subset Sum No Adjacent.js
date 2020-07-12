// Write a function that takes in an array of positive integers and returns the maximum sum of non-adjacent elements in the array. If a sum can't be generated, the function should return 0

// Time: O(n)
// Space: O(1)

function maxSubsetSumNoAdjacent(array) {
	if (!array.length) {
		return 0;
	} else if (array.length === 1) {
		return array[0]
	}
	var first = array[0];
	var second = Math.max(first, array[1]);
	
	for (var i = 2; i < array.length; i++) {
		if (array[i] + first >= second) {
			var temp = first;
			first = second;
			second = temp + array[i];
		} else {
			first = second;
		}
	}
	return second
}

maxSubsetSumNoAdjacent([75,105,120,75,90,135])

// maxSubsetSumNoAdjacent([4, 3, 5, 200, 5, 3])