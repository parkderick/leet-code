// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. Return an array of the two numbers. If numbers don't exist return empty array.

// Input: array = [3, 5, -4, 8, 11, 1, -1, 6], targetSum = 10
// Output: [-1, 11]


// Time: O(n^2)
// Space: O(1)

function twoNumberSum(array, targetSum) {
	var result = [];
	for (var i = 0; i < array.length; i++) {
		for (var j = i+1; j < array.length; j++) {
			if (array[i] + array[j] === targetSum) {
				result.push(array[i], array[j]);
				break;
			}
		}
	}
	return result;
}

// Time: O(n)
// Space: O(n)

function twoNumberSum(array, targetSum) {
	var obj = {};
	var result = [];
	for (var i = 0; i < array.length; i++) {
		if (obj[array[i]]) {
			result.push(array[i], obj[array[i]]);
			break;
		} else {
			obj[targetSum - array[i]] = array[i];
		}
	}
	return result;
}