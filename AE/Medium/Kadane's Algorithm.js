// Write a function that takes in a non-empty array and returns the maximum sum that can be obtained by summing up all of the integers in a non-empty subarray of the input array. A subarry must contain only adjacent numbers
function kadanesAlgorithm(array) {
	var maxNum = -Infinity;
	var sum = 0;
	var startIndex = 0;
	var endIndex = 0;
	for (var i = 0; i < array.length; i++) {
		if (sum < 0) {
			sum = 0;
			startIndex = i;
		}
		sum += array[i]
		if (sum > maxNum) {
			maxNum = sum;
		}
	}
	return maxNum;
}
