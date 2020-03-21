class Node {
  constructor (input) {
    this.value = input;
    this.next = null;
  }
}
  
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToHead = input => {
    var node = new Node(input);
    this.tail = new Node(input);
    node.next = this.head;
    this.head = node;
  }
  removeHead = () => {
    if (this.head === null) { 
      return null; 
    }
    var currentHead = this.head;
    this.head = this.head.next;
    return currentHead.value;
  }
  addToTail = input => {
    var node = new Node(input);
    if (!this.head) {
      this.head = node;
    } else {
      var current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.tail = node;
    }
  }
  removeTail = () => {
    var current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
    this.tail = current;
  
  }
  contains = target => {
    var current = this.head;
    while (current) { 
      if (current.value === target) { 
        return true; 
      } 
      current = current.next;
    } 
    return false;
  }
  removeAnywhere = target => {
    var current = this.head;
    var previous = null;
    while (current) {
      if (current.value === target) {
        if (!previous) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        if (!current.next) {
          this.tail = previous;
        }
      }
      previous = current;
      current = current.next;
    }
  }
}

// var LList = new LinkedList;
// LList.addToHead(1);
// LList.addToHead(5);
// LList.addToHead(6);
// LList.addToHead(7);
// LList.removeHead();
// LList.addToTail(1);
// LList.addToTail(5);
// LList.addToTail(2);
// LList.addToTail(7);
// LList.removeTail();
// LList.removeAnywhere(7);
// console.log(LList.contains(6));
// console.log(JSON.stringify(LList));

module.exports = {
  LinkedList,
  Node
};