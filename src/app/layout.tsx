import { Inter } from "next/font/google"
import "./globals.css"
import Head from "next/head";

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
       <main>{children}</main>
     </div>
  )
}
