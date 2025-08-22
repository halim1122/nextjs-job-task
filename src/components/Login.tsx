'use client';

import { signIn } from 'next-auth/react';

export default function Login() {
  return (
    <div>
      <button className='text-lg text-white font-semibold' onClick={() => signIn()}>
        Login
      </button>
    </div>
  );
}
