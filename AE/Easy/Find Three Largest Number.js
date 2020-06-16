// Write a function that takes in an array of integers, without sorting the input array, returns a sorted array of the three largest integers in the input array.

// The function should return duplicate integers if necessary; for example, it should return [10 , 10, 12] for an input array of [10, 5, 9, 10, 12]

function findThreeLargestNumbers(array) {
	var threeLargest = [null, null, null];
	for (var i = 0; i < array.length; i++) {
		updateLargest(threeLargest, array[i])
  }
	return threeLargest
}

function updateLargest(threeLargest, num) {
	if (threeLargest[2] === null || threeLargest[2] < num) {
		shift(threeLargest, num, 2);
	} else if (threeLargest[1] === null || threeLargest[1] < num) {
		shift(threeLargest, num, 1);
	} else if (threeLargest[0] === null || threeLargest[0] < num) {
		shift(threeLargest, num, 0);
	}
}

function shift(arr, num, index) {
	for (var i = 0; i <= index; i++) {
		if (i === index) {
			arr[i] = num;
		} else {
			arr[i] = arr[i+1]
		}
	}
}

