"use client"
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function LoginwithGoogle() {
    const router = useRouter();

  const { status } = useSession();
  console.log(status);

  useEffect(() => {
    if(status === "authenticated")
      router.push("/dashboard");
  },[status])

  return (
    <div>
        <button onClick={() => signIn('google')}>Login</button>
    </div>
  )
}

export default LoginwithGoogle