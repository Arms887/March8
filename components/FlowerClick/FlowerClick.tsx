'use client'

import { useEffect, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './FlowerClick.module.scss'

interface FlowerItem {
  id: number
  x: number
  y: number
  emoji: string
  size: number
  rotate: number
}

const FLOWERS = ['🌸', '🌺', '🌹', '🌷', '🌼', '💐', '🌻', '🪷']

let idCounter = 0

export default function FlowerClick() {
  const [flowers, setFlowers] = useState<FlowerItem[]>([])

  const handleClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    // Don't trigger on buttons or interactive elements
    if (target.closest('button') || target.closest('a') || target.closest('[role="button"]')) return

    const emoji = FLOWERS[Math.floor(Math.random() * FLOWERS.length)]
    const flower: FlowerItem = {
      id: idCounter++,
      x: e.clientX,
      y: e.clientY,
      emoji,
      size: 24 + Math.floor(Math.random() * 28),
      rotate: (Math.random() - 0.5) * 60,
    }

    setFlowers((prev) => [...prev, flower])
    setTimeout(() => {
      setFlowers((prev) => prev.filter((f) => f.id !== flower.id))
    }, 1800)
  }, [])

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [handleClick])

  return (
    <div className={styles.wrap} aria-hidden="true">
      <AnimatePresence>
        {flowers.map((f) => (
          <motion.span
            key={f.id}
            className={styles.flower}
            style={{ left: f.x, top: f.y, fontSize: f.size }}
            initial={{ scale: 0, opacity: 1, rotate: f.rotate, y: 0 }}
            animate={{ scale: [0, 1.4, 1], opacity: [1, 1, 0], y: -80, rotate: f.rotate + 20 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
          >
            {f.emoji}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}
