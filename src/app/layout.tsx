import { Poppins } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';
import Navbar from '@/components/system/Navbar';
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from '@/context/AuthContext';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap'
})

export const metadata = {
  title: 'MirageNotes - Next Gen AI powered Note Making Platform For New Age.',
  description: 'Next Gen AI powered Note Making Platform For New Age.',
}

export default function RootLayout({ children } : any) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProvider>
          <NextTopLoader color="#ffe4e1" />
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}