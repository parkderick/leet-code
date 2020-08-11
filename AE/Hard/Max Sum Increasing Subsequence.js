// Write a function that takes in a non-empty array of integers and greatest sum that can be generated from a strictly-increasing subsequence in the array as well as an array of the numbers in that subsequence.

// A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array.

// array = [10, 70, 20, 30, 50, 11, 30]

// Output: [110, [10,20,30,50]]

// Time: O(n^2)
// Space: O(n)

function maxSumIncreasingSubsequence(array) {
	var sequences = new Array(array.length);
	var sums = array.map(num => num);
	var maxSumIndex = 0;
	for (var i = 0; i < array.length; i++) {
		var j = 0;
		var max = array[i];
		while (j !== i) {
			if (array[j] < array[i] && sums[j] + array[i] >= sums[i]) {
				sums[i] = array[i] + sums[j];
				sequences[i] = j;
			}
			j++;
		}
		if (sums[i] >= sums[maxSumIndex]) {
			maxSumIndex = i;
		}
	}
  return [sums[maxSumIndex], buildSequence(array, sequences, maxSumIndex)];
}
		function buildSequence(array, sequences, currentIndex) {
			var sequence = [];
			while (currentIndex !== undefined) {
				sequence.unshift(array[currentIndex]);
				currentIndex = sequences[currentIndex];
			} 
			return sequence
		}