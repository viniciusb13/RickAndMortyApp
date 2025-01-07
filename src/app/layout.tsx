import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rick and Morty',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-start pt-8 px-5 md:px-[150px] sm:px-[90px] lg:[210px]">
          {children}
        </main>
      </body>
    </html>
  )
}
