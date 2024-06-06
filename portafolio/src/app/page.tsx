import Image from 'next/image'
import Hero from './ui/components/main/Hero'
import About from './ui/components/main/About'
import Resume from './ui/components/main/Resume'

export default function Home () {
  return (
    <>
      <Hero />
      <About />
      <Resume />
    </>
  )
}
