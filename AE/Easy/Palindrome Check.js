// Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome.

// Time: O(n)
// Space: O(n)

function isPalindrome(string) {
	if (string === string.split('').reverse().join('')) {
		return true;
	} else {
		return false;
	}
}