// 153p
// ex1)
class Collection {
  #arr;
  constructor(...args) {
    this.#arr = Array.isArray(args[0]) ? args[0] : args;
  }

  get _arr() {
    return this.#arr;
  }

  push(n) {
    this.#arr.push(n);
    return this;
  }

  size() {
    return this.#arr?.length;
  }

  toString() {
    return `${this.constructor.name}(${this.size})
      \n<${JSON.stringify(this.#arr)}>`;
  }

  print() {
    console.log(this.toString());
  }

  toArray() {
    return [...this.#arr]; // 복제
  }

  peek() {
    return this.#arr.at(this.isStack() ? -1 : 0);
  }

  isStack() {
    return this.constructor.name === "Stack";
  }
}
class Stack extends Collection {
  pop() {
    return this._arr.pop();
  }

  // peek() {
  //   return this._arr.at(-1);
  // }
}
const stack = new Stack([1, 2]); // or new Stack([1,2]); // (1,2)
stack.push(3).push(6); // 추가하기
console.log(stack.pop()); // 마지막에 추가된 하나 꺼내기
stack.print();

// ex2)
class Queue extends Collection {
  enqueue(n) {
    this.push(n);
    return this;
  }
  dequeue() {
    return this._arr.shift();
  }
  // peek() {
  //   return this._arr.at(0);
  // }
}
const queue = new Queue();
queue.enqueue(5).enqueue(8); // 추가하기
console.log(queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
console.log(queue.dequeue());
queue.print();

console.log("====================================================");

// 154p
