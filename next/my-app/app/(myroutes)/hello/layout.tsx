import Link from 'next/link';
import { ReactNode } from 'react';

export default function HelloLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1 className='text-lg'>Hello Layout</h1>
      <div>
        <ul className='flex justify-between text-blue-500'>
          <li>
            <Link href='/hello'>Home</Link>
          </li>
          <li>
            <Link href='/hello/morning'>Morning</Link>
          </li>
          <li>
            <Link href='/hello/afternoon'>AfterNoon</Link>
          </li>
          <li>
            <Link href='/hello/evening'>Evening</Link>
          </li>
        </ul>
      </div>
      <div className='border border-red-400 border-dotted'>{children}</div>
    </>
  );
}
