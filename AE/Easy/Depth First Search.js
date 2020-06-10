// Implement a Depth First Search

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    var traverse = function(node) {
        array.push(node.name)
        for (var i = 0; i < node.children.length; i++) {
            traverse(node.children[i])
        }
    }
    traverse(this);
    return array;
  }
}