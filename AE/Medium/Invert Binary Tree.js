// Write a function that takes in a Bianry Tree and inverts instanceof. In other words, the function should swap every left node in the tree for its corresponding right node.

// Time: O(n) n number of nodes
// Space: O(d) d number of depth

function invertBinaryTree(tree) {

  function inverseTree(node) {
    var temp = node.right;
    node.right = node.left;
    node.left = temp;

    node.left && inverseTree(node.left);
    node.right && inverseTree(node.right);
  }
  inverseTree(tree)
  return tree;
}