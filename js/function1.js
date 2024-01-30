function hello(name) {
  console.log(`Hello, ${name}`, arguments);
  return `Hello, ${name}`;
}

hello("Hong");
const hi = hello;
hi("Kim");
console.log(">>", hi.length, hi.name);

// function printFnReturnValue(fn, nm) {
//   console.log("printFnRet", fn.name, fn(nm));
// }

function printFnReturnValue(...args) {
  console.log("args: ", args);
  const [fn, nm] = args;
  console.log("fn: ", fn);
  console.log("nm: ", nm);
  console.log("printFnRet", fn.name, fn(nm));
}

printFnReturnValue(hi, "Lee");
