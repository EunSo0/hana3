// setTimeout( function() {
//   console.log('depth1', new Date());
//   setTimeout( function() {
//     console.log('depth2', new Date());
//     setTimeout( function() {
//       console.log('depth3', new Date());
//       throw new Error('Already 3-depth!!');
//     }, 3000 );
//   }, 2000);
// }, 1000);

// console.log('START!', new Date());

//-------------------------------------------------

// const promiseF = (d, sec) => {
//   new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(d, new Date());
//     }, sec);
//   });
// };

// promiseF("promise depth1", 1000);
// promiseF("promise depth2", 2000);
// promiseF("promise depth3", 3000);

// const awaitF = async () => {
//   console.log("await depth1", new Date());
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   console.log("await depth2", new Date());
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   console.log("await depth3", new Date());
// };
// awaitF();

const depthTimer = (n) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`depth${n} ${new Date()}`);
      if (n >= 3) reject(new Error("Already 3-depth!!"));
      resolve(n + 1);
    }, n * 1000);
  });

// 1. then으로 실행
depthTimer(1)
  .then(depthTimer)
  .then(depthTimer)
  .catch((err) => console.error(err));

// 2. await 방식
try {
  const r1 = await depthTimer(1);
  const r2 = await depthTimer(2);
  const r3 = await depthTimer(3);
} catch (err) {
  console.error(err);
}

// 3. for-await-of
const depthTimers = [1, 2, 3].map(async (depth) => depthTimer(depth));
try {
  for await (const dt of depthTimers) {
    dt;
  }
} catch (err) {
  console.error(err);
}
