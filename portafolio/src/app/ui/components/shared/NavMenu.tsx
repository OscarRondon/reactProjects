'use client'
import '../../css/NavMenu.css'
import Image from 'next/image'
import Link from 'next/link'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react'

export default function NavMenu () {

  const [activeMenuOption, setActiveMenuOption] = useState('Home')

  function activeMenuOptionHandler (menuOption: string): void {
    const newActiveMenuOption = menuOption
    setActiveMenuOption(newActiveMenuOption)
  }

  return (
  <div className='flex flex-col'>
    <section className='profile'>
      <Image width={500} height={500} className='img-fluid rounded-full' src='/img/profile-img.jpg' alt='' />
      <h1 className='mt-3'><Link className='nav-link' href=''>Oscar Rondon</Link></h1>
      <div className='social-links text-center my-3'>
          <a href='#' title='Linkedin'><i className='bi-linkedin'></i></a>
          <a href='#' title='Github'><i className='bi-github'></i></a>
      </div>
    </section>

    <nav id="navbar" className="nav-menu navbar">
      <ul>
        <li>
          <a href='#hero' title='home'className={activeMenuOption === 'Home' ? 'active' : ''}
            onClick={() => { activeMenuOptionHandler('Home') }}>
            <i className='bi bi-house-door'></i><span>Home</span>
          </a>
        </li>
        <li>
          <a href='#about' title='about'className={activeMenuOption === 'About' ? 'active' : ''}
            onClick={() => { activeMenuOptionHandler('About') }}>
            <i className='bi bi-person-check'></i><span>About</span>
          </a>
        </li>
        <li>
          <a href='#resume' title='resume'className={activeMenuOption === 'Resume' ? 'active' : ''}
            onClick={() => { activeMenuOptionHandler('Resume') }}>
            <i className='bi bi-file-earmark-check'></i><span>Resume</span>
          </a>
        </li>
        <li>
          <a href='#potfolo' title='portfolio'className={activeMenuOption === 'Portfolio' ? 'active' : ''}
            onClick={() => { activeMenuOptionHandler('Portfolio') }}>
            <i className='bi bi-terminal'></i><span>Portfolio</span>
          </a>
        </li>
        <li>
          <a href='#sevices' title='service'className={activeMenuOption === 'Service' ? 'active' : ''}
            onClick={() => { activeMenuOptionHandler('Service') }}>
            <i className='bi bi-hdd-stack'></i><span>Services</span>
          </a>
        </li>
        <li>
          <a href='#contact' title='contact'className={activeMenuOption === 'Contact' ? 'active' : ''}
            onClick={() => { activeMenuOptionHandler('Contact') }}>
            <i className='bi bi-envelope-at'></i><span>Cotact</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  )
}
