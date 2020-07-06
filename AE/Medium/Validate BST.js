// Write a function that validates a tree if its a BST.

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {	
  var result = true;
    function traverse(node, lowerBound, upperBound) {
        if (node.value >= upperBound || node.value < lowerBound) {
      result = false;
      return;
        }
        node.left && traverse(node.left, lowerBound, node.value);
    node.right && traverse(node.right, node.value, upperBound);
    }
    traverse(tree, -Infinity, Infinity);
    return result;
}
  