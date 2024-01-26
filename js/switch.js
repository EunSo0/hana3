const x = 2;
switch (x) {
  case 1:
    console.log("111", abc);
    break;
  case 2:
    var v = 1;
    const c = 3;
    console.log("222", abc);
  case 3:
    console.log("333", v, c);
    break;
  case 4:
    console.log("444", v, c);
    break;
  default:
    console.log("etc");
}

// if-else 보다 성능면으로 좋다.
function ifFn(x) {
  if (x === 1) {
    console.log("111");
    return 11;
  }

  if (x === 2 || x === 3) {
    console.log("2 or 3", x);
    return 23;
  }

  if (c < 1 || x > 3) {
    console.log("etc");
  }

  return x + 1;
}
