const fetchBoard = async () => {
  let postId;
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=1`
  );
  const comments = await fetch(
    `https://jsonplaceholder.typicode.com/posts/{postId}/comments`
  );
  return post.json();
};

console.log(await fetchBoard());
