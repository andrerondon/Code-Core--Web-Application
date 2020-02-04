class Stack {
    constructor() {
      this.nodes = [];
    }
  
    add(data) {
      this.nodes.push(data);
    }
  
    remove() {
      return this.nodes.pop();
    }
  
    isEmpty() {
      return this.nodes.length === 0;
    }
  }
  
  
  
  class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(data) {
      this.items.push(data);
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    get front() {
      return this.items[0];
    }
  
    get rear() {
      return this.items[this.items.length - 1];
    }
  }
  // reverse a string using a queue
  
  function reverseStringQ(string) {
    let revString = '';
    const characterQueue = new Queue();
    for (let i = string.length - 1; i >= 0; i--) {
      characterQueue.enqueue(string[i]);
    }
    while(!characterQueue.isEmpty()) {
      revString += characterQueue.dequeue();
    }
    return revString;
  }
  
  console.log(reverseStringQ('abcd')); // 'dcba';
  
  // reverse a string using a stack
  function reverseStringS(string) {
    let revString = '';
    const characterStack = new Stack();
    for (let c of string) {
      characterStack.add(c);
    }
    while(!characterStack.isEmpty()) {
      revString += characterStack.remove();
    }
    return revString;
  }
  console.log(reverseStringS('abcdsafdsfdsafasdd')); // 'dcba';
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  