const hong = { id: 1, name: "Hong" };
const map = new Map([
  [1, 11],
  [2, 22],
]);
map.set("three", 333);
map.set("four", [1, 2, 3, 4]);
map.set(hong.name, hong);
map.set(hong, hong.name);
console.log(map.get(hong));
console.log(map);
map.delete(hong);
console.log(map.has(hong));
console.log(map.has(hong.name));
map.clear();

map.set(1, 11).set(2, 22).set(3, 33);
console.log(map.entries());
console.log(map.keys());
console.log(map.values());
console.log("===================");
console.log(map);

const wm = new WeakMap();
