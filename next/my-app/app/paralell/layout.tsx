'use client';

import Link from 'next/link';
import { useReducer } from 'react';

// app/paralell/layout.tsx
export default function ParalellLayout({
  children,
  profile,
  login,
}: {
  children: React.ReactNode;
  profile: React.ReactNode;
  login: React.ReactNode;
}) {
  // const isLogin = true;
  const [isLogin, toggleLogin] = useReducer((pre) => !pre, false);
  return (
    <>
      <h1>
        ParalellLayout
        <button onClick={toggleLogin} className='float-end'>
          Toggle Login
        </button>
      </h1>

      {children}
      {isLogin ? (
        <div className='border border-dotted border-red-500 flex justify-around p-5'>
          <div className='border p-3'>{profile}</div>
          <div className='border p-3'>{login}</div>
        </div>
      ) : null}
      <div className='flex justify-around'>
        <Link href='/paralell/bbb'>Profile/BBB</Link>
        <Link href='/paralell/aaa'>Login/AAA</Link>
      </div>

      <div className='flex justify-around'>
        <Link href='/paralell/ccc'>Profile/CCC</Link>
        <Link href='/paralell/ddd'>Login/DDD</Link>
      </div>
      <Link href='/paralell/xxx'>XXX</Link>
    </>
  );
}
