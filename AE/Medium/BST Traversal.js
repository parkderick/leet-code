// Write three functions that take in a BST and an empty Array, traverse the BST, add its nodes values to the input Array, and return that Array.

// in-order | pre-order | post-order 

// Time | Space: O(n) O(n)

function inOrderTraverse(tree, array) {
	var current = tree;
	function traverse(node) {
		node.left && traverse(node.left);
		array.push(node.value);
		node.right && traverse(node.right);
	}
	traverse(tree);
	return array;
}

function preOrderTraverse(tree, array) {
	var current = tree;
	function traverse(node) {
		array.push(node.value);
		node.left && traverse(node.left);
		node.right && traverse(node.right);
	}
	traverse(tree);
	return array;
}

function postOrderTraverse(tree, array) {
	var current = tree;
	function traverse(node) {
		node.left && traverse(node.left);
		node.right && traverse(node.right);
		array.push(node.value);
	}
	traverse(tree);
	return array;
}
