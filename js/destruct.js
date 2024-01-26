const user = { id: 1, name: "P", age: 33 };
const { name: n, age = 30 } = { name: "Lee" };

const fn = ({ age }) => age;

const { age2: age = fn(user) } = { age22: 20 };

class Dog {}
const lucy = new Dog();

function fn(a, b, ...c) {[]
  console.log('a: ', arguments)
  console.log('c: ': c)
}

f(1,2,3,4);
