// Write a function that takes in a non-empty sorted array of distinct integers, constructs a BST from the integers, and returns the root of the BST.

// Time | Space: O(n)
function minHeightBst(array) {
	var result;
	var constructBST = function(arr, start, end, bst) {
		if (end < start) {
			return;
		}
		var mid = Math.floor((start + end)/ 2);
		if (!result) {
			result = new BST(arr[mid]);
		} else {
			bst.insert(arr[mid]);
		}
		constructBST(arr, start, mid - 1, result);
		constructBST(arr, mid + 1, end, result);
	}
	constructBST(array, 0, array.length - 1);
	return result;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}