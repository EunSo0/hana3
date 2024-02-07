const sampleUrl = "https://jsonplaceholder.typicode.com/users/1";
const sampleUrl2 = "https://jsonplaceholder.typicode.com/posts/1";
// const isAsyncAwait = true;

// if (isAsyncAwait) {
//   const res = await fetch(sampleUrl);
//   const data = await res.json();
//   console.log("data: ", data);
// } else {
//   fetch(sampleUrl)
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// const promiFetch = (url) =>
//   new Promise((resolve, reject) => {
//     fetch(url)
//       .then((res) => res.json())
//       .then(resolve); //((data) => resolve(data))
//   });

// const asyncFetch = async (url) => {
//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// };

// const data = await promiFetch(sampleUrl);
// console.log(data);

// const data2 = await asyncFetch(sampleUrl);
// console.log(data2);

// const rets = [sampleUrl, sampleUrl2].map(async (url) => {
//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// });

// for (const s of [sampleUrl, sampleUrl2]) {
//   mapResult.push(f(s));
// }
// console.log(mapResult);

const f = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

  if (!res.ok) throw new Error("Failt to Fetch!!");

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const data = await res.json();

  return data.name;
};

console.log(await f());
