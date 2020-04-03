class Stack {
  constructor() {
    this.storage = {};
    this.counter = 0;
  }
  push(input) {
    this.storage[this.counter] = input;
    this.counter++;
  }
  pop() {
    this.counter--;
    var result = this.storage[this.counter];
    delete this.storage[this.counter];
    return result;
  }
  size() {
    return this.counter;
  }
  peek() {
    var temp = this.counter;
    temp--
    return this.storage[temp];
  }
}
  
//   var stack = new Stack;
//   stack.push(1);
//   stack.push(3);
//   stack.push(4);
//   console.log(stack.pop());
//   stack.push(1);
//   stack.push(1);
//   stack.push(1);
//   console.log(stack.pop());
//   console.log(stack.size());
//   console.log(stack.peek());
//   console.log(stack);
  
module.exports = Stack;