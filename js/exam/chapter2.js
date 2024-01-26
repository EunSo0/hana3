// 연습문제 1
for (let i = 0.1; i < 1; i += 0.1) console.log(+i.toFixed(1));
// for (let i = 0.1; i < 1; i += 0.1) console.log(Number(i.toFixed(1)));

console.log("------------");
// 연습문제 2
function addPoints(a, b) {
  console.log("내가짠 코드");
  const alen = a.toString().length - ([...a.toString()].indexOf(".") + 1);
  const blen = b.toString().length - ([...a.toString()].indexOf(".") + 1);
  const result = +(a + b).toFixed(Math.max(alen, blen));
  console.log(result);

  console.log("풀이코드");
  function getLength(x) {
    return (x ?? 0).toString().length;
  }

  const len = Math.max(getLength(a), getLength(b));
  const result2 = +(a + b).toFixed(len - 2);
  console.log(result2);
}
addPoints(0.21354, 0.1);
addPoints(0.14, 0.28);
addPoints(0.34, 0.226);

console.log("------------");
// 연습문제 3
const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };
const { passwd, ...userInfo } = user;
console.log(userInfo);

console.log("------------");
// 연습문제 4
const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
console.log(id1, id2, id3);
