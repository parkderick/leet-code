// Given a linked list, swap every two adjacent nodes and return its head.

// You may not modify the values in the list's nodes, only nodes itself may be changed.

// Runtime: 52 ms (+79.95%)
// Memory: 33.8 MB (+68.42%)

var swapPairs = function(head) {
  var current = head;
  var runner = head.next;
  var previous;
  var temp;
  while (current) {
    if (current.next) {
      temp = current.next;
    }
    if (current.next && current.next.next) {
      temp = current.next.next;
    } else {
      temp = null;
    }
    if (runner) {
      runner.next = current;
    }
    if (previous === undefined) {
      previous = runner;
      head = previous;
      previous = previous.next;
    } else if (runner) {
      previous.next = runner
      if (runner.next) {
        previous = previous.next.next;
      }
    }
    current.next = temp;
    current = current.next
    if (current) {
      runner = current.next;
    }
  }
  return head;
};


class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// var node = new LinkedListNode(1);
// var node1 = new LinkedListNode(2);
// var node2 = new LinkedListNode(3);
// var node3 = new LinkedListNode(4);
// var node4 = new LinkedListNode(5);
// node.next = node1;
// node1.next = node2;
// node2.next = node3;
// node3.next = node4;

var node = new LinkedListNode(1);
var node1 = new LinkedListNode(2);
var node2 = new LinkedListNode(3);
var node3 = new LinkedListNode(4);
var node4 = new LinkedListNode(5);
var node5 = new LinkedListNode(6);
var node6 = new LinkedListNode(7);
node.next = node1
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6


console.log(JSON.stringify(swapPairs(node)));