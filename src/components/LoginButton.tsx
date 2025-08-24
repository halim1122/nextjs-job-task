"use Client";

import { signIn, useSession } from 'next-auth/react'
import React from 'react'

export default function LoginButton() {
     const {data: Session}= useSession();
     return (
          <div>
               <button className='py-1 px-4 border-2 border-white text-lg lg:text-xl text-white rounded-sm' onClick={() => signIn()}>
                    {Session?.user?.email ? "Logout" : "Login"}
               </button>
          </div>
     )
}
