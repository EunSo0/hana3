// console.log(i); // error
let i = 1;
console.log("x=", x);
var x = 1;
console.log(ff, f);
// f(); // error -> undefined
{
  f();
  var x = 2;
  function f() {
    console.log("f>", x, xx);
  } // 블록속에 진입했을떄 함수로 인정받음
  const b = 1;
}
function ff() {
  // console.log("ff>", y, yy); // yy는 not defined
}
if (x >= 2) {
  var y = 5;
  let yy = 55; // 블록스코프라서 호이스팅될떄 블록을 뚫고 올라갈 수 없다.
}
var xx = 100;
ff();
