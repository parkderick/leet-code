// The distance between a node in a Binary Tree and the tree's root is called the node's depth.

// Write a function that takes in Binary Tree and returns the sum of its nodes depth.

// Time: O(n)
// Space: O(h) h is the height of the deepest node

function nodeDepths(root) {
	var depth = 0;
	var current = root;
	var BFS = (node, level) => {
		depth += level;
		node.left && BFS(node.left, level+1);
		node.right && BFS(node.right, level+1);
	}
	BFS(current, 0);
	return depth;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}