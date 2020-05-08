// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:

// Given n will always be valid.

// Follow up:

// Could you do this in one pass?

// Runtime: 52 ms
// Memory: 34.1 MB

var removeNthFromEnd = function(head, n) {
  var current = head;
  var size = 0;
  while (current) {
    size++;
    current = current.next;
  }
  var previous;
  current = head;
  while (size) {
    if (size === n) {
              if (size === 1 && !previous) {
        return null;
      }
      if (current && current.next) {
        if (previous) {
          previous.next = current.next;
        } else {
          head = current.next;
        }
      } else {
        previous.next = null;
      }
    }
    size--;
    previous = current;
    current && (current = current.next);
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
node.next = node1


console.log(JSON.stringify(removeNthFromEnd(node, 2)));
    