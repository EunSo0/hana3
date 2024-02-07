import { rand } from "./utils/index.js";
// const randtime = new Promise((resolve) => {
//   const sec = rand(1, 4) * 500;
//   setTimeout(() => resolve(sec), sec);
// });

const randTime = () =>
  new Promise((resolve) => {
    const sec = rand(1, 4) * 500;
    setTimeout(() => {
      console.log("sec=", sec);
      resolve(sec);
    }, sec);
  });

const isParellel = true;
console.time("promi");
if (isParellel) {
  Promise.allSettled([randTime(), randTime(), randTime()]).then(() =>
    console.timeEnd("promi")
  );
} else {
  randTime()
    .then((x) => {
      return randTime();
    })
    .then((x) => {
      return randTime();
    })
    .then((x) => {
      return randTime();
    })
    .then(() => console.timeEnd("promi"));
}
