// You're given 3 inputs, all of which are instances of an ANcestralTree class that have an ancestor property pointing to their youngest ancestor. The first input is the top acestor and the other two inputs are descendants in the ancestral tree.

// Write a function that returns the youngest common ancestor to the two descendants.

class AncestralTree {
    constructor(name) {
      this.name = name;
      this.ancestor = null;
    }
  }

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  var getDepth = function(node) {
    var depth = 0;
    while (node.ancestor) {
      depth++;
    }
    return depth
  }
  var depth1 = getDepth(descendantOne);
  var depth2 = getDepth(descendantTwo);
  console.log(depth1, depth2)

}