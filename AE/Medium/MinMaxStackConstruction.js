// Write a MinMaxStack class for a MinMax Stack. The class should support:
// -push pop values
// -peek at the value at top of stack
// -getting both min and max values in the stack at any given point in time.
class MinMaxStack {
	constructor() {
    this.storage = [];
  }

  push(val) {
		var temp;
    if (this.storage.length) {
      temp = {
        value: val,
        min: Math.min(this.storage[this.storage.length - 1].min, val),
        max: Math.max(this.storage[this.storage.length - 1].max, val)
      };
    } else {
			temp = {
        value: val,
        min: val,
        max: val
			}
		}
    this.storage.push(temp)
  }

  pop() {
    return this.storage.pop().value
  }

  peek() {
    return this.storage[this.storage.length - 1].value;
  }

  getMin() {
    return this.storage[this.storage.length - 1].min;
  }
  getMax() {
    return this.storage[this.storage.length - 1].max;
  }
 
}