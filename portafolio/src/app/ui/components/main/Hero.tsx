'use client'

import '@/ui/css/Hero.css'
import Typewriter from 'typewriter-effect'

export default function Hero () {
  return (
    <section id="hero" className="flex flex-col justify-center items-center">
    <div className="hero-container" data-aos="fade-in">
      <h1>Oscar Rondon</h1>
      <p><span className="typed">
        <Typewriter
          options={{
            strings: ['.Net Fullstack Developer', 'Reactjs Developer', 'SAP Business One Developer', 'SAP Business One Consultant'],
            autoStart: true,
            loop: true
          }}
        />
      </span></p>
    </div>
  </section>
  )
}
