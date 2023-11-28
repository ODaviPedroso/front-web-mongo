import { POST } from '@/utlils/useApi'
import { useRouter } from 'next/router';
import { login } from '../../app/Auth';

import React from 'react'


const index = () => {
    const router = useRouter();
   async function fazerLogin(){
    try {
        const data = {
            author_user: "davi teste",
            author_pwd: "123"
          }
          
        const loginUser = await POST("api/users/login", data)
        const teste = await loginUser.success;
        if(teste){
            
            await login()
            router.push("/")
        }

    } catch (error) {
        console.log(error);
    }
   }

  return (
    <div>
        <button onClick={fazerLogin}>teste post</button>
    </div>
  )
}

export default index