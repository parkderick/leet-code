// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triples. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.

// Input: array=[12, 3, 1, 2, -6, 5, -8, 6], targetSum=0
// Output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

// Time: O(n^3);
// Space: O(n);

function threeNumberSum(array, targetSum) {
	var result = [];
  array.sort((a,b) => a - b);
	for (var i = 0; i < array.length; i++) {
		for (var j = i+1; j < array.length; j++) {
			for (var k = j+1; k < array.length; k++) {
				if (array[i] + array[j] + array[k] === targetSum) {
					result.push([array[i], array[j], array[k]]);
				}
			}
	  }
	}
	return result;
}

// Time: O(n^2);
// Space: O(n);

function threeNumberSum(array, targetSum) {
	var result = [];
  array.sort((a,b) => a - b);
	
	for (var firstI = 0; firstI < array.length; firstI++) {
		var secondI = firstI+1;
		var thirdI = array.length - 1;
		while (secondI < thirdI) {
			var sum = array[firstI] + array[secondI] + array[thirdI];
			if (sum < targetSum) {
				secondI++;
			} else if (sum > targetSum) {
				thirdI--;
			} else {
				result.push([array[firstI], array[secondI], array[thirdI]]);
				thirdI--;
			}
		}
	}
	return result;
}