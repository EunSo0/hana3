const isStringNumber = (value: unknown): value is [string, number] =>
  Array.isArray(value) &&
  typeof value[0] === "string" &&
  typeof value[1] === "number";

const f1 = (value: number | string | boolean | [string, number]) => {
  if (isStringNumber(value)) {
    console.log(value[0].toUpperCase(), value[1].toFixed());
  }
};

console.log("----------------------------------------------------------");

interface Animal {}
interface Dog extends Animal {
  name: string;
}
interface Cat extends Animal {
  punch(): void;
}
class Retriever implements Dog {
  constructor(public name: string) {
    this.name = name;
  }
}

function isDog(a: Animal): a is Dog {
  // return a instanceof Retriever; // Dog implements 모든 클래스
  return "name" in a && !("punch" in a);
}
