// Write a function that takes in an array of integers and returns a sorted version of that array. Use the Insertion Sort algorithm to sort the array.

// Runtime: Best O(n) Avg O(n^2) Worst O(n^2)
// Memory: O(1)

function insertionSort(array) {
	for (var i = 1; i < array.length; i++) {
		var j = i;
		while (j > 0 && array[j] < array[j - 1]) {
			var temp = array[j-1];
			array[j-1] = array[j];
			array[j] = temp;
			j-=1
		}
	}
	return array;
}