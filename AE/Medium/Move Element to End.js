// You're given an array of integers and an array. Write a function that movs all instances of that integers in the array to the end of the array and returns the array.

// Time: O(n)
// Space: O(1);

function moveElementToEnd(array, toMove) {
	var left = 0;
	var right = array.length - 1;
	while (left < right) {
		if (array[left] === toMove) {
			if (array[right] === toMove) {
				right--;
			} else {
				array[left] = array[right];
				array[right] = toMove;
				right--;
				left++;
			}
		} else {
			left++;
		}
	}
    return array;
}
	