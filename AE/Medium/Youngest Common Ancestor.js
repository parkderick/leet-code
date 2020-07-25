// You're given 3 inputs, all of which are instances of an ANcestralTree class that have an ancestor property pointing to their youngest ancestor. The first input is the top acestor and the other two inputs are descendants in the ancestral tree.

// Write a function that returns the youngest common ancestor to the two descendants.

class AncestralTree {
    constructor(name) {
      this.name = name;
      this.ancestor = null;
    }
  }

  function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
	var depth1 = depthFinder(descendantOne, topAncestor);
	var depth2 = depthFinder(descendantTwo, topAncestor);
	
	function depthFinder(node, a) {
		var depth = 0;
		while (node.name !== a.name) {
			node = node.ancestor;
			depth++;
		}
		return depth;
	}
	
	var backtrack = 0;
	
	var nodeOne = descendantOne;
	var nodeTwo = descendantTwo;
	
	if (depth1 < depth2) {
		backtrack = depth2 - depth1;
		nodeTwo = traverse(descendantTwo, backtrack)
	} else if (depth1 > depth2) {
		backtrack = depth1 - depth2;
		nodeOne = traverse(descendantOne, backtrack)
	}
	
	function traverse(node, backtrack) {
		while (backtrack !== 0) {
			node = node.ancestor;
			backtrack--;
		}
		return node;
	}
	
	while (nodeOne.name !== nodeTwo.name) {
		nodeOne = nodeOne.ancestor;
		nodeTwo = nodeTwo.ancestor;
	}
	return nodeOne;
}