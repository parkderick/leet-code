// Given a binary tree, return the inorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [1,3,2]
// Follow up: Recursive solution is trivial, could you do it iteratively?

const BST = require('../Data-Structures/BinarySearchTree');
const Stack = require('../Data-Structures/Stack');

// Runtime: 80 ms
// Memory Usage: 34MB

var inorderTraversal = function(root) {
  var result = [];
  function recurse(node) {  
    node.left ? recurse(node.left) : null;
    result.push(node.value);
    node.right ? recurse(node.right) : null;
  }
  recurse(root);
  return result;
};

// Runtime: 88 ms
// Memory Usage: 33.6MB

var inorderTraversal = function(root) {
  var result = [];
  var stack = new Stack();
  var current = root;
  while (current || Object.keys(stack.storage).length >= 1) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.value);
    current = current.right;
  }
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

console.log(inorderTraversal(test));
