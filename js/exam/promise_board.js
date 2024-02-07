const userId = 1;
const res = await fetch(
  `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
);
const posts = (await res.json()).map(({ id: postId, title }) => ({
  postId,
  title,
}));
console.log(posts.length);

async function getComments(postId) {
  const cRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  return cRes.json();
}

// 직렬로 부름
for (const post of posts) {
  post.comments = await getComments(post.postId);
}

// console.log(JSON.stringify(posts, null, "  "));

//병렬로 부름 
const commentRes = await Promise.all(
  posts.map((post) => getComments(post.postId))
);
console.log(commentRes);
