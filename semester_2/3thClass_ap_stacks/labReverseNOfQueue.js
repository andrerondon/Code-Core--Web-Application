// write a fucntion that accepts a integer "x" and a queue
// it will reverse the first "x" integers in the provided queue.

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
  
  // write a fucntion that accepts a integer "x" and a queue
  // it will reverse the first "x" integers in the provided queue.
  
  function reverseX(x, queue) {
    if (!queue instanceof Queue) { // sanity check to make sure the queue parameter is a instance of a queue
      throw new Error('can only accept queue');
    }
    const reverseStack = new Stack(); 
    const tempQueue = new Queue();
    while(x > 0) { // adding the first x reversed characgters to stack
      reverseStack.add(queue.dequeue());
      x--;
    }
    while(!queue.isEmpty()) { // pushing the remaining unreversed characters to a temp queue
      tempQueue.enqueue(queue.dequeue());
    }
    while(!reverseStack.isEmpty()) { // grabbing all reversed characters from the stack
      queue.enqueue(reverseStack.remove());
    }
    while(!tempQueue.isEmpty()) { // grabbing all remaining unreversed characters from temp queue
      queue.enqueue(tempQueue.dequeue());
    }
  }
  
  const q = new Queue();
  q.enqueue('a')
  q.enqueue('b')
  q.enqueue('c')
  q.enqueue('d')
  q.enqueue('e')
  q.enqueue('f')
  q.enqueue('g')
  
  reverseX(3, q); 
  // ["c", "b", "a", "d", "e", "f", "g"]
  console.log(q);