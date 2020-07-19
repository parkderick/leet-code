// You're given an array of integers where each integer represents a jump of its value in the array. For instance, the integer 2 represents a jump of two indices forwared in the array; the integer -3 represents a jump of three indices backward in the array.
// Time: O(n)
// Space: O(1)

function hasSingleCycle(array) {
	var total = 0;
	for (var i = 0; i < array.length; i++) {
		total += i;
	}
	
	var start = 0;
	var counter = 0;

	while (counter !== array.length) {
		total -= start;
		if (total < 0) {
			return false;
		}
		start = start + array[start];
		while (start < 0 || start > array.length - 1) {
		  if (start < 0) {
		  	start = array.length + start;
		  } else if (start > array.length - 1) {
			  start = start - array.length;
		  }
		}
		counter++;
	}
	if (total !== 0 || start !== 0) {
		return false;
	}
	return true;
}
