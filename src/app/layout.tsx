import "./globals.css"
import Head from "next/head";
import { AuthContextProvider } from '@/src/pages/auth/AuthContext'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Head>
        <title>Spreadsheet Import App</title>
        <meta name="description" content="Render data show table when import file" />
      </Head>
      <AuthContextProvider>
        {children}
      </AuthContextProvider>
     </div>
  )
}
