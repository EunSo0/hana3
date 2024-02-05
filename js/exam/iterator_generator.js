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

  peek() {
    return this._arr.at(-1);
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.size; i += 1) {
      yield this._arr[i];
    }
  }
  // generator 없이 만들때
  // return {
  //   next() {
  //     return { value: this._arr[idx++], done };
  //   },
  // };

  iterator() {
    return this[Symbol.iterator]();
  }
}

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
// const stack = new Stack([1, 2]);
// const queue = new Queue([1, 2, 3, 4]);

// for (const s of stack) console.log(s);
// for (const q of queue) console.log(q);
// const itStack = stack[Symbol.iterator]();
// // const itStack = stack.iterator();
// console.log(itStack.next());
// console.log(itStack.next());
// const itQueue = queue.iterator();
// console.log(itQueue.next());

// console.log("====================================================");

// 164p
function* add() {
  const a = yield "첫 번째 수";
  const b = yield "두 번째 수";
  return a + b;
}

const itAdd = add();
console.log(itAdd.next().value);
console.log(itAdd.next(1).value);
console.log(itAdd.next(2).value);
