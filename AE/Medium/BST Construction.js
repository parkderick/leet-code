// Write a BST class for a Binary Search Tree. The class should support:
// - Inserting values with the insert method
// - Removing values with the remove method; this method should only remove the first instance of a given value.
// - Searching for values with the contains method.

class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
      
      // Time: O(logn)
      // Space: O(1)
      
    insert(value) {
          var current = this;
          while (current) {
              if (value < current.value ) {
                  if (!current.left) {
                      current.left = new BST(value);
                      break;
                  } else {
                      current = current.left;
                  }
              }
              if (value >= current.value) {
                  if (!current.right) {
                      current.right = new BST(value);
                      break;
                  } else {
                      current = current.right;
                  }				
              }
          }
      // Write your code here.
      // Do not edit the return statement of this method.
      return this;
    }
      
      // Time: O(logn)
      // Space: O(1)
      
    contains(value) {
          var current = this;
          while (current) {
              if (current.value === value) {
                  return true;
              }
              if (value < current.value) {
                  current = current.left;
              } else {
                  current = current.right;
              }
          }
          return false;
    }
  
      // Time: O(logn)
      // Space: O(1)
      
    remove(value) {
          var current = this;
          var direction;
          if (current.value === value) {
              if (!current.left && !current.right) {
                  return this;
              }
              current = current.right;
              var previous;
              while (current && current.left) {
                previous = current;
                  current = current.left;
              }
              if (previous) {
                  previous.left = null;
              } else {
                  this.right = null;
              }
              this.value = current.value;
          } else {
              while (current) {
                if (current.value === value) {
                      if (!current.left && !current.right) {
                          previous[direction] = null;
                      } else if (current.left) {
                          previous[direction] = current.left;
                      } else {
                          previous[direction] = current.right;
                      }
                      // current.right && previous[direction] = current.right;
                      break;
                  }
                  previous = current;
                if (value <= current.value) {
                    current = current.left;
                    direction = 'left';
                } else {
                    current = current.right;
                    direction = 'right';
                }
              }
          }
        return this;
      }
  }
  