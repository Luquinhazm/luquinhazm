import CHeader from '@/components/CHeader'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CFooter from '@/components/CFooter'
import Providers from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luquinhazm',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">

      <body className={`${inter.className} dark:bg-zinc-900`}>
        <Providers>
          <CHeader />
          {children}
          <CFooter />
        </Providers>
      </body>
    </html>
  )
}
