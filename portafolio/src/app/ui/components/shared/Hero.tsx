import '@/ui/css/Hero.css'

export default function Hero () {
  return (
    <section id="hero" className="flex flex-col justify-center items-center">
    <div className="hero-container" data-aos="fade-in">
      <h1>Oscar Rondon</h1>
      <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
    </div>
  </section>
  )
}
