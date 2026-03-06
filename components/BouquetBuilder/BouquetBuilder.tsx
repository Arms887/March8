'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './BouquetBuilder.module.scss'

const FLOWER_OPTIONS = [
  { emoji: '🌹', name: 'Վարդ', color: '#ff1744' },
  { emoji: '🌷', name: 'Կակաչ', color: '#ff69b4' },
  { emoji: '🌸', name: 'Ծիրան', color: '#ffb3c6' },
  { emoji: '🌺', name: 'Հիբիսկուս', color: '#e040fb' },
  { emoji: '🌼', name: 'Մարգարիտ', color: '#ffd700' },
  { emoji: '🌻', name: 'Արևածաղիկ', color: '#ff6d00' },
]

interface BouquetFlower {
  id: number
  emoji: string
}

let bid = 0

export default function BouquetBuilder() {
  const [open, setOpen] = useState(false)
  const [bouquet, setBouquet] = useState<BouquetFlower[]>([])

  const addFlower = (emoji: string) => {
    if (bouquet.length >= 12) return
    setBouquet((prev) => [...prev, { id: bid++, emoji }])
  }

  const clear = () => setBouquet([])

  return (
    <>
      {/* Toggle button */}
      <motion.button
        className={styles.toggleBtn}
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Ծաղկեփունջ"
        title="Կազմիր ծաղկեփունջ"
      >
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ display: 'inline-block' }}
        >
          💐
        </motion.span>
        {bouquet.length > 0 && (
          <span className={styles.badge}>{bouquet.length}</span>
        )}
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 80, scale: 0.95 }}
            transition={{ type: 'spring', bounce: 0.3, duration: 0.5 }}
          >
            <h3 className={styles.title}>Կազմիր ծաղկեփունջ 💐</h3>
            <p className={styles.sub}>Ընտրիր ծաղիկներ (մինչև 12)</p>

            <div className={styles.options}>
              {FLOWER_OPTIONS.map((f) => (
                <motion.button
                  key={f.emoji}
                  className={styles.flowerBtn}
                  style={{ '--fc': f.color } as React.CSSProperties & { '--fc': string }}
                  onClick={() => addFlower(f.emoji)}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  title={f.name}
                >
                  <span className={styles.flowerEmoji}>{f.emoji}</span>
                  <span className={styles.flowerName}>{f.name}</span>
                </motion.button>
              ))}
            </div>

            <div className={styles.bouquetDisplay}>
              <AnimatePresence>
                {bouquet.length === 0 ? (
                  <p className={styles.empty}>Ծաղկեփունջն դատարկ է</p>
                ) : (
                  bouquet.map((f, i) => (
                    <motion.span
                      key={f.id}
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: (i % 2 === 0 ? 1 : -1) * (i * 3) }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: 'spring', bounce: 0.5 }}
                      className={styles.bouquetFlower}
                    >
                      {f.emoji}
                    </motion.span>
                  ))
                )}
              </AnimatePresence>
            </div>

            {bouquet.length > 0 && (
              <motion.button
                className={styles.clearBtn}
                onClick={clear}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Մաքրել
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
