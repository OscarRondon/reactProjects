import type { Metadata } from 'next'
import { OpenSans } from './ui/fonts'
import './css/reset.css'
import './globals.css'
import { SVGListBi } from './ui/icons/Icons'
import NavMenu from './ui/navmenu/NavMenu'

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
        <header>
          <NavMenu />
        </header>
        <main>
          <section className='top-row'>
              <i className='mobile-nav-toggle'><SVGListBi /></i>
          </section>
          <section>
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
