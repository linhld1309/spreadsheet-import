import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import RootLayout from '@/src/app/layout'
import { useRouter } from "next/navigation"
import { useAuthContext } from "@/src/pages/auth/AuthContext"

function App({ Component, pageProps }: AppProps) {
  const { user } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (user == null) router.push("/")
  }, [user])

  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default App
