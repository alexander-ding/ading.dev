import { FC, useEffect, useState } from 'preact/compat'
import './index.css'

interface BallProps {
  color: string
  x: number
  y: number
  size: number
  transformX: number
  transformY: number
  animationDuration: number
  animationDelay: number
  blurRadius: number
  isFlipped: boolean
}

const Ball: FC<BallProps> = ({
  color,
  x,
  y,
  size,
  transformX,
  transformY,
  animationDuration,
  animationDelay,
  blurRadius,
  isFlipped,
}) => {
  const particleSize = 80
  const particle = particleSize * size
  const duration = 20
  const flip = isFlipped ? -1 : 1
  const blur = (blurRadius + 0.5) * particleSize * 0.5
  return (
    <span
      className={'backface-hidden fixed -z-1'}
      style={{
        width: `${particle}vmin`,
        height: `${particle}vmin`,
        marginLeft: `${-particle / 2}vmin`,
        marginTop: `${-particle / 2}vmin`,
        borderRadius: `${particle}vmin`,
        animationName: 'move',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
        opacity: 0.33,
        color: color,
        top: `${y * 80 + 10}vh`,
        left: `${x * 80 + 10}vw`,
        animationDuration: `${animationDuration * duration + 30}s`,
        animationDelay: `${
          -animationDelay * (animationDuration * duration + 30)
        }s`,
        transformOrigin: `${transformX * 50 - 25}vw ${transformY * 50 - 25}vh`,
        boxShadow: `${particle * 2 * flip}vmin 0 ${blur}vmin currentColor`,
      }}
    />
  )
}

const colors = [
  '#CC99C9',
  '#9EC1CF',
  '#9EE09E',
  '#FDFD97',
  '#FEB144',
  '#FF6663',
]

function sampleBall(): BallProps {
  return {
    color: colors[Math.floor(Math.random() * colors.length)],
    x: Math.random(),
    y: Math.random(),
    size: Math.random(),
    transformX: Math.random(),
    transformY: Math.random(),
    animationDuration: Math.random(),
    animationDelay: Math.random(),
    blurRadius: Math.random(),
    isFlipped: Math.random() > 0.5 ? true : false,
  }
}

const Background: FC = () => {
  const nBalls = 20
  const [balls, setBalls] = useState<Array<BallProps>>([])
  useEffect(() => {
    setBalls(Array(nBalls).fill(0).map(sampleBall))
  }, [])
  return (
    <div className='background'>
      {balls.map((ball) => (
        <Ball {...ball} />
      ))}
    </div>
  )
}

export default Background
