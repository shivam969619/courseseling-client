'use client'
import type { Metadata } from 'next'
import {Poppins} from "next/font/google"
import { Josefin_Sans } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './utils/theme-provider'
import {Providers} from "./Provider"
import { SessionProvider } from 'next-auth/react'
import { useLoadUserQuery } from '@/redux/features/api/apiSlice'
import Loader from "./components/Loader/Loader"
import { Children } from 'react'
const poppins=Poppins({
  subsets:["latin"],
  weight:["400","500","600","700"],
  variable:"--font-Poppins",
});


const josefin=Josefin_Sans({
  subsets:["latin"],
  weight:["400","500","600","700"],
  variable:"--font-Josefin",
});





export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}${josefin.variable} !bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}>
        <Providers>
        <SessionProvider>
<ThemeProvider attribute='class' defaultTheme='system'  enableSystem>
<Custom>{children}</Custom>
  <Toaster position='top-center' reverseOrder={false} />
</ThemeProvider>
</SessionProvider>
</Providers>
      </body>
    </html>
  )
}

const Custom: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading } = useLoadUserQuery({});
  return (
    <>
      {isLoading ? <Loader /> : <>{children}</>}
    </>
  );
};
