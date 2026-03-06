'use client'

import { useEffect, useState } from 'react'
import styles from './Confetti.module.scss'

interface Particle {
  id: number
  left: number
  delay: number
  duration: number
  color: string
  size: number
  drift: number
  shape: 'circle' | 'rect' | 'heart'
}

const COLORS = [
  '#ff1744',
  '#ffd700',
  '#ff69b4',
  '#ff6d00',
  '#e040fb',
  '#00e5ff',
  '#76ff03',
  '#ff1493',
]

export default function Confetti() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const shapes: Particle['shape'][] = ['circle', 'rect', 'heart']
    const items: Particle[] = Array.from({ length: 90 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 4 + Math.random() * 5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 6 + Math.random() * 10,
      drift: (Math.random() - 0.5) * 200,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    }))
    setParticles(items)
  }, [])

  return (
    <div className={styles.confetti} aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`${styles.particle} ${styles[p.shape]}`}
          style={
            {
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              backgroundColor: p.shape !== 'heart' ? p.color : 'transparent',
              color: p.color,
              width: `${p.size}px`,
              height: `${p.size}px`,
              '--drift': `${p.drift}px`,
            } as React.CSSProperties & { '--drift': string }
          }
        >
          {p.shape === 'heart' && '\u2665'}
        </div>
      ))}
    </div>
  )
}
