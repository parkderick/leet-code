class Node {
  constructor() {
    this.edges = {};
  }
}

class Graph {
  constructor() {
    this.AdjList = {};
  }
  addVertex(input) {
    this.AdjList[input] = new Node();
  }
  removeVertex(input) {
    for (var key in this.AdjList) {
      if (this.AdjList[key].edges[input]) {
        delete this.AdjList[key].edges[input];
      }
    }
    delete this.AdjList[input];
  }
  addEdge(fromNode, toNode) {
    this.AdjList[fromNode].edges[toNode] = new Node();
    // If undirected uncomment line below
    // this.AdjList[toNode.value].edges[fromNode.value] = fromNode
  }
  removeEdge(fromNode, toNode) {
    delete this.AdjList[fromNode].edges[toNode];
    delete this.AdjList[toNode].edges[fromNode];
  }
  contains(value) {
    if (this.AdjList[value]) {
      return true;
    } else {
      return false;
    }
  }
}

// var graph = new Graph();
// graph.addVertex(1);
// graph.addVertex(2);
// graph.addVertex(3);
// graph.addVertex(4);
// graph.addEdge(1, 2);
// graph.removeEdge(1, 2);
// graph.removeVertex(2);
// console.log(graph.contains(3));
// console.log(JSON.stringify(graph));

module.exports = {
  Node,
  Graph
}
