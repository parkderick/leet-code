// Write a function that takes in an array of integers and returns a sorted version of that array. Use Bubble Sort algorithm.

// Runtime: Best O(n) Avg O(n^2) Worst O(n^2)
// Memory: O(1)

function bubbleSort(array) {
	var isSorted= false;
	var counter = 0;
	while (!isSorted) {
		isSorted = true;
		for (var i = 0; i < array.length - counter; i++) {
			if (array[i] > array[i+1]) {
				var temp = array[i+1];
				array[i+1] = array[i];
				array[i] = temp;
				isSorted = false;
			}
		}
		counter++;
	}
	return array;
}