import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'jabbajohnny',
  description: 'own site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${inter.className}`}>{children}</body>
    </html>
  )
}
