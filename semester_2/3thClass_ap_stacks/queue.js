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
  
  const lineup = new Queue();
  lineup.enqueue({name: 'brandon'});
  lineup.enqueue({name: 'steve'});
  console.log(lineup.front);
  console.log(lineup.rear);