import type { Metadata } from 'next'
import { OpenSans } from './ui/fonts'
import './css/reset.css'
import './globals.css'
import { SVGListBi } from './ui/icons/Icons'

export const metadata: Metadata = {
  title: '[...OARC] Portfolio',
  description: 'Oscar Rondon fullstack development portfolio'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={OpenSans.className}>
        <main>
          <article className='top-row'>
              <i className='mobile-nav-toggle'><SVGListBi /></i>
          </article>

          {children}
        </main>
      </body>
    </html>
  )
}
