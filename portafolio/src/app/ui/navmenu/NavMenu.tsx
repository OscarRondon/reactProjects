'use client'
import './NavMenu.css'
import Image from 'next/image'
import Link from 'next/link'

export default function NavMenu () {
  return (
  <div className='flex flex-col'>
    <section className='profile'>
      <Image width={500} height={500} className='img-fluid rounded-full' src='/img/profile-img.jpg' alt='' />
      <h1 className='mt-3'><Link className='nav-link' href=''>Oscar Rondon</Link></h1>
      <div className='social-links text-center mt-3'>
          <a href='#' className='linkedin' title='Linkedin'><i className='bi bi-linkedin'></i></a>
          <a href='#' className='google-plus' title='Github'><i className='bi bi-github'></i></a>
      </div>
    </section>
  </div>
  )
}
