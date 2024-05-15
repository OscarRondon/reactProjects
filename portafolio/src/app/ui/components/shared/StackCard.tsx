import '@/ui/css/Hero.css'
import { Interface } from 'readline'
import Typewriter from 'typewriter-effect'

interface Props {
  ImgAlt?: string
  ImgSrc?: string
  CardTitle?: string
}

export default function StackCard (props: Props) {
  return (
    <section className="StackCard">
      <img className="img-fluid" alt={props.ImgAlt} src={props.ImgSrc} />
      <footer>{props.CardTitle}</footer>
    </section>
  )
}
