// The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is 1, and the nth number is the sum of the (n-1)th and (n-2)th numbers. Write a function that takes in an integer n and returns the nth Fibonacci number.

// Time: O(2^n)
// Space: O(n)

function getNthFib(n) {
	if (n < 1) {
		return 0;
	}
	if (n === 2) {
		return 1;
	}
	return getNthFib(n-1) + getNthFib(n-2)
}

// Time: O(n)
// Space: O(1)

function getNthFib(n) {
	if (n <= 1) {
		return 0;
	}
	if (n === 2) {
		return 1;
	}
	var fib = [0, 1];
	var counter = 3;
	while (counter <= n) {
		var temp2 = fib[0]
		var temp = fib[1]
		fib[0] = fib[1]
		fib[1] = temp2 + temp;
		counter++;
	}
	return fib[1]
}