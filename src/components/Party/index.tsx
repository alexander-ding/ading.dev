import { FC, useEffect, useMemo, useState } from 'preact/compat'

import useAnimationFrame from '../../hooks/useAnimationFrame'
import useWindowSize from '../../hooks/useWindowSize'

const colors = [
  '#ff7979',
  '#686de0',
  '#badc58',
  '#f6e58d',
  '#ffbe76',
  '#e056fd',
  '#7ed6df',
  '#dff9fb',
]

interface LightProps {
  x: number
  y: number
  color: string
}

const Light: FC<LightProps> = ({ x, y, color }) => {
  return (
    <div
      className='fixed w-10px h-10px rd-100% bg-white z-0'
      style={{
        left: `${x}px`,
        top: `${y}px`,
        boxShadow: `0px 0px 10px 10px white, 0px 0px 30px 30px ${color}, 0px 100px 100px 30px ${color}`,
      }}
    />
  )
}

interface BeamProps {
  color: string
  initialDegree: number
}

const Beam: FC<BeamProps> = ({ color, initialDegree }) => {
  const [degree, setDegree] = useState<number | undefined>(undefined)
  useAnimationFrame((time) => setDegree(((time / 40) % 360) + initialDegree))
  if (degree === undefined) {
    return null
  }
  return (
    <div
      className='fixed bg-white w-0 h-2000px -z-1'
      style={{
        top: '-5px',
        left: '50%',
        color: color,
        transformOrigin: 'center top',
        boxShadow: `0px 0px 100px 20px ${color}, 0px 0px 150px 20px ${color}`,
        transform: `rotate(${degree}deg)`,
        zIndex: -1,
      }}
    />
  )
}

const getRandomColors = (n: number) => {
  const beamColors = [...Array(n).keys()].map(
    () => colors[Math.floor(Math.random() * colors.length)],
  )
  return beamColors
}

interface BeamsProps {
  n: number
}
const Beams: FC<BeamsProps> = ({ n }) => {
  const [beamColors, setBeamColors] = useState(getRandomColors(n))
  useEffect(() => {
    const id = setInterval(() => setBeamColors(getRandomColors(n)), 2000)
    return () => clearInterval(id)
  }, [n, setBeamColors])

  return (
    <div className='beams'>
      {[...Array(n).keys()].map((i) => (
        <Beam color={beamColors[i]} initialDegree={(i * 360) / n} />
      ))}
    </div>
  )
}

const Lights: FC = () => {
  const windowSize = useWindowSize()
  const xInterval = windowSize.width / Math.floor(windowSize.width / 150)
  const yInterval = windowSize.height / Math.floor(windowSize.height / 150)

  const nHorizontalLights = useMemo(
    () => Math.floor(windowSize.width / 150) + 1,
    [windowSize],
  )
  const nVerticalLights = useMemo(
    () => Math.floor(windowSize.height / 150) + 1,
    [windowSize],
  )

  return (
    <div className='lights'>
      {[...Array(nHorizontalLights + 1).keys()].map((i) => (
        <Light x={i * xInterval} y={0} color={colors[i % colors.length]} />
      ))}
      {[...Array(nHorizontalLights + 1).keys()].map((i) => (
        <Light
          x={i * xInterval}
          y={windowSize.height - 10}
          color={colors[i % colors.length]}
        />
      ))}
      {[...Array(nVerticalLights - 2).keys()].map((i) => (
        <Light
          x={0}
          y={(i + 1) * yInterval}
          color={colors[(i + 1) % colors.length]}
        />
      ))}
      {[...Array(nVerticalLights - 2).keys()].map((i) => (
        <Light
          x={windowSize.width}
          y={(i + 1) * yInterval}
          color={colors[(i + 1) % colors.length]}
        />
      ))}
    </div>
  )
}

const DancerCursor: FC = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    const id = window.setInterval(
      () => setIsFlipped((isFlipped) => !isFlipped),
      2000,
    )
    return () => window.clearInterval(id)
  }, [])

  return (
    <img
      src='/assets/dancer.png'
      className='fixed z-1000 w-60px left-2 top-4 m-0! pointer-events-none'
      style={{
        transform: isFlipped ? 'scaleX(-1)' : '',
      }}
    />
  )
}

const Party: FC = () => {
  return (
    <div className='party'>
      <DancerCursor />
      <Lights />
      <Beams n={12} />
    </div>
  )
}

export default Party
