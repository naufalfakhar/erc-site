import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Electrical Research Center',
  description: 'Electrical Research Center HME FKET ITPLN Official Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} scrollbar`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
