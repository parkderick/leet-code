// Write a function that takes in the head of a singly linked list that contains a loop (in other words, the list's tail node points to some node in the list instead of None / Null). The fun should return the node from which the node pointing in the next node in the list.

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function findLoop(head) {
      var storage = {};
      while (head) {
          if (storage[head.value]) {
              return head;
          }
          storage[head.value] = true;
          head = head.next;
      }
    // Write your code here.
  }