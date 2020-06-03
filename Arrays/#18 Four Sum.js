// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

// Note:

// The solution set must not contain duplicate quadruplets.


// Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]

function fourNumberSum(array, targetSum) {
	var numbers = {};
	var quadruples = [];
	for (var i = 1; i < array.length - 1; i++) {
		for (var j = i+1; j < array.length; j++) {
			var sum = array[i] + array[j];
			var difference = targetSum - sum;
			if (numbers[difference]) {
				for (var l = 0; l < numbers[difference].length; l++) {
				  quadruples.push(numbers[difference][l].concat([array[i], array[j]]))
				}
			}
		}
		for (var k = 0; k < i; k++) {
		  var sum = array[i] + array[k];
			if (!numbers[sum]) {
				numbers[sum] = [[array[k], array[i]]];
			} else {
				numbers[sum].push([array[k], array[i]]);
			}
		}
	}
	return quadruples;
}