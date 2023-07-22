import './globals.css'
import { Inter } from 'next/font/google'

import { League_Spartan } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const leagueSpartan = League_Spartan({
  weight: '900',
  subsets: ['latin'],
  display: "swap",
})

export const metadata = {
  title: 'jabbajohnny',
  description: 'own site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`min-h-screen bg-slate-400 ${leagueSpartan.className}`}>{children}</body>
    </html>
  )
}
