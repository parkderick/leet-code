// Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a neww string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key.

// Input: string="xyz", key=2
// Output: "zab"

// Time: O(n)
// Space: O(n)

function caesarCipherEncryptor(string, key) {
	var newString = '';
	for (var i = 0; i < string.length; i++) {
		var place = string[i].charCodeAt(0) + key;
		while (place > 122) {
			place = 96 + place - 122;
		}
		var letter = String.fromCharCode(place);
		newString += letter;
	}
	return newString
}