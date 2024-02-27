import { Outlet, useNavigate } from 'react-router-dom';
import { useSession } from '../../contexts/session-context';
import { useState } from 'react';

export const ItemLayout = () => {
  const navigate = useNavigate();
  const {
    session: { cart },
  } = useSession();
  const [currItem, setCurrItem] = useState<Cart | null>(null);

  const goItem = (item: Cart) => {
    setCurrItem(item);
    navigate(`/v1/items/${item.id}`);
  };

  return (
    <>
      <div className='flex justify-evenly'>
        <ul className='basis-1/2'>
          {cart.map((item) => (
            <li key={item.id}>
              <button onClick={() => goItem(item)}>{item.name}</button>
            </li>
          ))}
        </ul>
        <div className='basis-1/2 border border-green-400 rounded-md'>
          <Outlet context={{ item: currItem }}></Outlet>
        </div>
      </div>
    </>
  );
};
