import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSession } from '../../contexts/session-context';
import { useFetch } from '../../hooks/fetch';
import { PostType } from './Post';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const PostLayout = () => {
  const {
    session: { loginUser },
  } = useSession();

  const {
    data: posts,
    isLoading,
    error,
  } = useFetch<PostType[]>({
    url: `${BASE_URL}/posts?userId=${loginUser?.id}`,
    dependencies: [loginUser],
    defaultData: [],
  });

  const [currPost, setCurrPost] = useState<PostType | null>(null);
  const navigate = useNavigate();

  if (error) {
    return <h1>{error}</h1>;
  }

  if (isLoading) return <h1>Loaging...</h1>;

  const goPost = (post: PostType) => {
    setCurrPost(post);
    navigate(`/posts/${post.id}`);
  };

  return (
    <>
      <div className='flex'>
        <div>
          {posts?.map((post) => (
            <li key={post.id}>
              <button
                onClick={() => goPost(post)}
                className='hover:text-blue-300'
              >
                <small className='text-gray-300'>#{post.id}</small>
                {post.title}
              </button>
            </li>
          ))}
        </div>
        <div>
          <Outlet context={{ post: currPost }}></Outlet>
        </div>
      </div>
    </>
  );
};
