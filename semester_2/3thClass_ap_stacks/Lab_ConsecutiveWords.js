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

  get top() {
    return this.nodes[this.nodes.length - 1];
  }

  unload() {
    return this.nodes;
  }
}

function destroyConsecutiveWords(sentence) {
  const setenceArray = sentence.split(" ");
  const s1 = new Stack();
  const q2 = new Queue();
  for (const word of setenceArray) {
    q2.enqueue(word);
  }
  while (!q2.isEmpty()) {
    if (s1.top === q2.front) {
      s1.remove();
      q2.dequeue();
    } else {
      s1.add(q2.dequeue());
    }
  }
  return s1.nodes.join(" ");
}

console.log(destroyConsecutiveWords("a b b a")); // ""
console.log(destroyConsecutiveWords("a b b a c")); // "c"
console.log(destroyConsecutiveWords("apple banana apple banana banana apple")); // "apple banana"



// function removeDuplicateWords(string) {
//     const stack = new Node();
//     let arr = string.split(' ')
//     // let newArr = " "
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] !== arr[i+1]){}
//           stack.add(arr[i])
//         }
    
//     return arr
// }



  

// console.log(removeDuplicateWords('sun moon moon sun'));
// console.log(removeDuplicateWords('apple apple banana pear banana'));
// console.log(removeDuplicateWords('a a a apple banana banana pineapple'));
  
