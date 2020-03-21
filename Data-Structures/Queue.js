class Queue {
  constructor() {
    this.storage = {};
    this.start = 0;
    this.end = 0;
  }
  enqueue(input) {
    this.storage[this.end] = input;
    this.end++;
  }
  dequeue() {
    var result = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return result;
  }
  size() {
    return this.end - this.start;
  }
  peek() {
    return this.storage[this.start];
  }
}

// var queue = new Queue;
// queue.enqueue(1);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(1);
// queue.enqueue(1);
// queue.enqueue(1);
// queue.dequeue();
// console.log(queue.size());
// console.log(queue.peek());
// console.log(queue)

module.exports = Queue;