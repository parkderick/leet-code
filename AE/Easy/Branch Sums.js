// Write a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sums.

// Time: O(n)
// Space: O(n)

class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  
  function branchSums(root) {
      var stack = [];
      var current = root;
      var BFS = (node, sum) => {
          sum += node.value;
          if (!node.left && !node.right) {
              stack.push(sum);
          }
          node.left && BFS(node.left, sum);
          node.right && BFS(node.right, sum);
      }
      BFS(current, 0);
      return stack;
  }
  