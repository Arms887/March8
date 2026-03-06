'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './GifGallery.module.scss'

const gifs = [
  { url: 'https://media1.tenor.com/m/6pC4mBmL2TwAAAAC/good-morning-flowers.gif', caption: 'Գարնանային ծաղիկներ', emoji: '🌸' },
  { url: 'https://media1.tenor.com/m/Wy9x2eK4UAoAAAAC/good-morning-beautiful.gif', caption: 'Սեր և քնքշություն', emoji: '💕' },
  { url: 'https://media1.tenor.com/m/dLe7xVOM14gAAAAC/i-love-you-love-you-more.gif', caption: 'Տոնական ', emoji: '💕' },
  { url: 'https://media1.tenor.com/m/SxIVVfcUh6UAAAAC/transparent-love.gif', caption: 'Վարդեր քեզ համար', emoji: '🌷' },
]

const directions = [
  { x: -60, y: -60 },
  { x: 60, y: -60 },
  { x: -60, y: 60 },
  { x: 60, y: 60 },
]

export default function GifGallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className={styles.section} ref={ref}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, type: 'spring' }}
      >
        <span>🎀</span> Քեզ համար, սիրով <span>🎀</span>
      </motion.h2>

      <div className={styles.grid}>
        {gifs.map((gif, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, x: directions[i].x, y: directions[i].y }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ delay: i * 0.12, duration: 0.65, type: 'spring', bounce: 0.35 }}
            whileHover={{ scale: 1.04, rotate: i % 2 === 0 ? -1.5 : 1.5, zIndex: 10 }}
          >
            <div className={styles.imgWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={gif.url} alt={gif.caption} className={styles.gif} />
              <div className={styles.overlay} />
            </div>
            <p className={styles.caption}>
              <span className={styles.captionEmoji}>{gif.emoji}</span>
              {gif.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
