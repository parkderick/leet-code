// You're given a Node class that has a name and an array of optional nodes. When put together, nodes form an acyclic tree-like structure.
// Implement the BFS method on the Node class, which takes in an empty array, traverses the tree using the BFS approach (nav tree from left to right), stores all nodes names in input arraym and returns it.
class Queue {
    constructor() {
      this.storage = {};
      this.start = 0;
      this.end = 0;
    }
    enqueue(node) {
      this.storage[this.end] = node;
      this.end++;
    }
    dequeue() {
      var item = this.storage[this.start];
      delete this.storage[this.start];
      this.start++;
      return item;
    }
  }
  class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
      // Time: 0(n)
      // Space: O(n)
    breadthFirstSearch(array) {
      var queue = new Queue;
      queue.enqueue(this);
      var item;
      while (item = queue.dequeue()) {
        array.push(item.name)
        for (var i = 0; i < item.children.length; i++) {
          var node = item.children[i]
          queue.enqueue(node)
        }
      }
      return array;
    }
  }