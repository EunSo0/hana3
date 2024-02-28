import { Outlet, useNavigate } from 'react-router-dom';
import { useSession } from '../../contexts/session-context';
import { useState } from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';

export const ItemLayout = () => {
  const navigate = useNavigate();
  const {
    session: { loginUser },
  } = useSession();

  const [currItem, setCurrItem] = useState<Cart | null>(null);
  const setOutletItem = (item: Cart) => {
    setCurrItem(item);
    navigate(`/v2/items/${item.id}`);
  };
  return (
    <>
      <header className='flex justify-between mb-2 p-3 bg-cyan-300 text-white'>
        <div>장바구니</div>
        <div className='inline-flex'>
          <FaRegCircleUser className='mt-1 mr-1' />
          {loginUser ? (
            loginUser?.name
          ) : (
            <button onClick={() => navigate('/login')}>SignIn</button>
          )}
        </div>
      </header>

      <div className='border border-sky-500 rounded-lg p-5'>
        <Outlet context={{ setOutletItem, item: currItem }} />
      </div>

      <footer className='sticky'>@Copyright Hanaro</footer>
    </>
  );
};
