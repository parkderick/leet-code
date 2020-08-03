// Write a function that takes in a non empty array of distinct integers and an integer representing a target sum.

// Your function should return a two-dimensional array of all the quadruples that add up to the target sum.

// Time: O(n^3) 
// Space: O(n^2)

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
