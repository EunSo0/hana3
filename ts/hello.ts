// console.log("Hello Typescript");

// function add(a: number, b: number) {
//   return a + b;
// }

// add(1, 2);

// type UserType = {
//   id: number;
//   name: string;
// } & { city?: string };

// interface UserIF {
//   id: number;
//   name: string;
//   city?: string;
//   getName(): string;
// }

// class User implements UserIF {
//   public id: number;
//   name: string;
//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }
//   getName(): string {
//     return this.name;
//   }
// }

// const hong: User = { id: 1, name: "Hong" };
// const kim: User = { id: 2, name: "Kim" };

// const s: string = "abc";
// let i = 1;

// type X = { id: Number; name: string };
// type Y = { id: number; addr: string };

// type Z = {
//   [i: String]: string | number;
//   id: number;
// };
// const compos: Z = { id: 1, name: "Hong", addr: "seoul" };

// type ANY = any;
// function add(a: ANY, b: ANY) {
//   return a + b;
// }

// let numArr: number[] = [1, 2, 3];
// numArr = [1];
// let numTuple: [number, number] = [1, 2];
// numTuple = [3, 4];

// // -----------------------------------------------------------
// let numbers: number[];
// // let numbers: Array<number>;

// numbers = [1, 2, 3, 4, 5]; // OK

//    numbers.push("six");

type TUser1 = { id: number; name: string };
const obj = { id: 1, name: "aa", addr: "1212" };
let user: TUser1 = obj;
const kim = { id: 2, name: "Kim", addr: "Pusan" };
const users: TUser1[] = [{ id: 3, name: "aa", addr: "1212" }, kim];

// array => tuple => union
const bts = ["A", "B", "AB", "O"];
