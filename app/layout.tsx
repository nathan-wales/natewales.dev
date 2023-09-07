// WRAPS ALL PAGES!!!!

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './footer'
import Sidebar from './sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'natewales.dev',
  description: 'hey wassup I doubt people will ever see this',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex'>
          <Sidebar />
          <div>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
