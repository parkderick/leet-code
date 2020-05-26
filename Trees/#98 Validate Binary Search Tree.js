// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
 

// Example 1:

//     2
//    / \
//   1   3

// Input: [2,1,3]
// Output: true
// Example 2:

//     5
//    / \
//   1   4
//      / \
//     3   6

// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

const BST = require('../Data-Structures/BinarySearchTree');

// Time: 68 ms
// Memory 37.2 MB

var isValidBST = function(root) {
  var current = root;
  var min = -Infinity;
  var max = Infinity;
  var result = true;
  function traverseTree(node, lower, upper) {
    if (node) {
      if (node.val <= lower || node.val >= upper) {
        result = false;
      } 
      if (node.left) {
        traverseTree(node.left, lower, node.val);
      }
      if (node.right) {
        traverseTree(node.right, node.val, upper);
      }
    }
  }
  traverseTree(current, min, max);
  return result;
};

var test = new BST(5);
test.insert(2);
test.insert(8);
test.insert(1);
test.insert(10);
test.insert(3);
test.insert(4);
console.log(test);

console.log(isValidBST(test));
