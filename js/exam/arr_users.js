console.log("----------------1번문제----------------");
const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };
const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [kim, lee, park];

const addUser = (user) => [...users, user];
const removeUser = (user) => users.filter((_user) => _user.id !== user.id);
const changeUser = (u1, u2) =>
  users.map((_user) => (_user.id === u1.id ? u2 : _user));

console.log(addUser(hong));
console.log(removeUser(lee));
console.log(changeUser(kim, choi));

console.log("--------------------2번문제-------------------");
//2-1
const assert = require("assert");
const arr = [1, 2, 3, true];
const ret1 = arr.map((item) => item.toString());
console.log(ret1);
assert.deepStrictEqual(ret1, ["1", "2", "3", "true"]);

//2-2
const classNamesV1 = (...args) =>
  args.reduce((acc, item) => `${acc}${acc && item ? " " : ""}${item}`, "");
const classNamesV2 = (...args) =>
  args.reduce(
    (acc, item) =>
      `${acc}${acc && item && item.trim() && " "}${
        item && item.trim() && item
      }`,
    ""
  );

const ret2 = classNamesV1("", "a b c", "d", "", "e");
const ret3 = classNamesV2(" ", "a b c", "d", "  ", "e");
console.log(ret2);
console.log(ret3);
assert.strictEqual(ret2, "a b c d e");

console.log("--------------------3번문제-------------------");
const arr2 = [1, 2, 3, 4, 5];
const square = (n) => n ** 2;
const cube = (n) => n ** 3;
// [1,4,9,...]
// [1,2,3,...]
// [1,8,27,...]
const ret3_1 = arr2.map(square).map(Math.sqrt).map(cube);
console.log(ret3_1);

const ret3_2 = [square, Math.sqrt, cube].reduce((acc, f) => f(acc), 2);
const bp1 = (n) => [square, Math.sqrt, cube].reduce((acc, f) => f(acc), n);
const ret3_3 = arr2.map((item) => bp1(item));
console.log(ret3_3);
