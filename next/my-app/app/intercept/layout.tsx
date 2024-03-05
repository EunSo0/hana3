import Link from 'next/link';
import { PropsWithChildren } from 'react';

export default function InterCeptlayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className='flex justify-between'>
        <Link href='/intercept/ic1'>IC1</Link>
        <Link href='/intercept/ic2'>IC2</Link>
        <Link href='/intercept/ic3'>IC3</Link>
      </div>

      <div className='border border-blue-500'>{children}</div>
    </>
  );
}
