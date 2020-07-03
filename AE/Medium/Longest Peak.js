// Write a function that takes in an arary of integers and returns the length of the longest peak in the array.

// A peak is defined as adjacent integers in the array that are strictly increasing until they reach the highest value, at which point they become strictly decreasing.

// Time: O(n);
// Space: O(1);

function longestPeak(array) {
	var i = 1;
	var peak = 0;
	while (i < array.length - 1) {
		var isPeak = array[i-1] < array[i] && array[i+1] < array[i];
		
		if (!isPeak) {
			i++;
			continue;
		}
		
		var leftIndex = i-2;
		while (leftIndex >= 0 && array[leftIndex] < array[leftIndex + 1]) {
			leftIndex--;
		}
		
		var rightIndex = i+2;
		while (rightIndex < array.length && array[rightIndex] < array[rightIndex - 1]) {
			rightIndex++;
    }
		
		var currentPeakLength = rightIndex - leftIndex - 1;
		peak = Math.max(peak, currentPeakLength);
		i = rightIndex;
	}
	return peak;
}
