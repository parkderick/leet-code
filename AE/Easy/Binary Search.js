// Write a function that takes in a sorted array of integers as well as a target integer. The function should use the Binary Search algorithm to determine if the target integer is contained in the array and should return its index if it is, otherwise -1.

// Input: array=[0, 1, 21, 33, 45, 45, 61, 71, 72,73], target=33
// Output: 3

function binarySearch(array, target) {
	var mid = Math.floor((array.length - 1) / 2);
	var start = 0;
	var end = array.length - 1;
	while (start <= end) {
		if (array[mid] === target) {
			return mid;
		} if (array[mid] < target) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
		mid = Math.floor((start + end) / 2);
	}
	return -1;
}