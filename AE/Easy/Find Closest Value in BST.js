// Write a function that takes in Binary Search Tree (BST) and a target integer value and returns the closest value to that target value contained in the BST.

// Time: O(log(n))
// Space: O(1)

function findClosestValueInBst(tree, target) {
	var closest;
	
	while (tree !== null) {
		if (!closest) {
			closest = tree;
		} else if (Math.abs(tree.value - target) < Math.abs(closest.value - target)) {
			closest = tree;
		}
		if (tree.value < target) {
			tree = tree.right;
		} else {
			tree = tree.left;
		}
	}
	return closest.value;
}