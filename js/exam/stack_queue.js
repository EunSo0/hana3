// 153p
// ex1)
class Stack {
  #arr = [];
  push(n) {
    this.#arr.push(n);
    return this.#arr;
  }
  pop() {
    return this.#arr.pop();
  }
}
const stack = new Stack([1, 2]); // or new Stack([1,2]); // (1,2)
stack.push(3); // 추가하기
console.log(stack.pop()); // 마지막에 추가된 하나 꺼내기

// ex2)
class Queue {
  #arr2 = [];
  enqueue(n) {
    this.#arr2.push(n);
    return this.#arr2;
  }
  dequeue() {
    return this.#arr2.shift();
  }
}
const queue = new Queue();
queue.enqueue(5); // 추가하기
console.log(queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기

console.log("====================================================");

// 154p
