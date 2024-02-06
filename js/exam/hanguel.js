import assert from "assert";

const ㄱ = "ㄱ".charCodeAt(0);
const ㅎ = "ㅎ".charCodeAt(0);
const 가 = "가".charCodeAt(0);

// const JAUM_ALPHA_NUMS = "lLmMnNrR013678";
// const x = [...JAUM_ALPHA_NUMS].map((s) => s.charCodeAt(0));
// console.log(x);
const JAUM_ALPHA_NUMS = [
  108, 76, 109, 77, 110, 78, 114, 82, 48, 49, 51, 54, 55, 56,
];

const isEndJaum = (str) => {
  const s = str.charCodeAt(str.length - 1);
  if (JAUM_ALPHA_NUMS.includes(s)) return true;
  if (s >= 12623 && s <= 12643) return false;
  if (s >= ㄱ && s <= ㅎ) return true;
  if ((s - 가) % 28 > 0) return true;
  return false;
};

assert.strictEqual(isEndJaum("강원도"), false);
assert.strictEqual(isEndJaum("바라당"), true);
assert.strictEqual(isEndJaum("ㅜㅜ"), false);
assert.strictEqual(isEndJaum("케잌"), true);
assert.strictEqual(isEndJaum("점수 A"), false);
assert.strictEqual(isEndJaum("알파벳L"), true);
assert.strictEqual(isEndJaum("24"), false);
assert.strictEqual(isEndJaum("23"), true);

const josa = (str, josaStr) => {
  const josas = josaStr.split("/");
  return isEndJaum(str) ? josas[0] : josas[1];
};
const iga = (str) => josa(str, "이/가");
const eunun = (str) => josa(str, "은/는");
const eulul = (str) => josa(str, "을/를");

console.log(`고성군${iga("고성군")}`);
console.log(`강원도${eunun("강원도")}`);
console.log(`고성군${eulul("고성군")}`);
