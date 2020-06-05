// Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

// Input: array = [5,1,22,25,6,-1,8,10], sequence = [1,6,-1,10]
// Output: true


// Time: O(n)
// Space: O(1)

function isValidSubsequence(array, sequence) {
	var sequenceIndex = 0;
	var arrayIndex = 0;

	while (arrayIndex !== array.length) {
		if (sequence[sequenceIndex] === array[arrayIndex]) {
			sequenceIndex++;
		}
		arrayIndex++;
	}
	if (sequenceIndex === sequence.length) {
		return true;
	} else {
		return false;
	}
}