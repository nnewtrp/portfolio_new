import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
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
        {/* Top Bar */}
        <div className="bg-black text-white text-2xl px-5 py-3">
          Teerapat
        </div>

        {/* Content */}
        {children}

        {/* Footer */}
      </body>
    </html>
  )
}
