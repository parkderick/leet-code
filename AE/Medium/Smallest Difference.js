Write a function that takes in two non-empty array of integers, finds the pair of numbers whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position.


function smallestDifference(arrayOne, arrayTwo) {
	var result;
	var min;
	for (var i = 0; i < arrayOne.length; i++) {
		for (var j = 0; j < arrayTwo.length; j++) {
			if (!min && min !== 0) {
			  min = Math.abs(arrayOne[i] - arrayTwo[j]);
				result = [arrayOne[i], arrayTwo[j]];
			} else {
				var prev = min;
				min = Math.min(min, Math.abs(arrayOne[i] - arrayTwo[j]));
				result = prev !== min ? [arrayOne[i], arrayTwo[j]] : result;
			}
		}
	}
	return result;
}

// Time: O(nlog(n) + mlog(m))
// Space: O(1)

function smallestDifference(arrayOne, arrayTwo) {
	arrayOne.sort((a,b) => a - b);
	arrayTwo.sort((a,b) => a - b);
	var oneIndex = 0;
	var twoIndex = 0;
	var smallest = Infinity;
	var current = -Infinity;
	var result = [];
	
	while (oneIndex < arrayOne.length && twoIndex < arrayTwo.length) {
		var temp;
		if (arrayOne[oneIndex] < arrayTwo[twoIndex]) {
			current = Math.abs(arrayTwo[twoIndex] - arrayOne[oneIndex]);
			temp = [arrayOne[oneIndex], arrayTwo[twoIndex]];
			oneIndex++;
		} else if (arrayTwo[twoIndex] < arrayOne[oneIndex]) {
			current = Math.abs(arrayOne[oneIndex] - arrayTwo[twoIndex]);
			temp = [arrayOne[oneIndex], arrayTwo[twoIndex]];
			twoIndex++;
		} else {
			return [arrayOne[oneIndex], arrayTwo[twoIndex]]
		}
		if (current < smallest) {
			smallest = current;
			result = temp;
		}
	}
	return result;
}