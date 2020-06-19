// Write a function that takes in an array of integers and returns a sorted version of that array. Use the Selection Sort algorithm to sort the array.

// Time: O(n^2)
// Space: O(1)

function selectionSort(array) {
	var i = 0;
	var k;
	
	while (i < array.length-1) {
		k = i;
		for (var j = i+1; j < array.length; j++) {
		  if (array[j] < array[k]) {
				k = j;
			}
		}
		var temp = array[i];
		array[i] = array[k];
		array[k] = temp;
		i++;
	}
	return array;
}
