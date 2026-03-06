'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Footer.module.scss'

const footerEmojis = ['🌸', '🌺', '🌹', '🌷', '💐', '🌸', '🌺', '🌹']

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <footer className={styles.footer} ref={ref}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className={styles.emojiRow} aria-hidden="true">
          {footerEmojis.map((e, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
            >
              {e}
            </motion.span>
          ))}
        </div>

        <motion.p
          className={styles.main}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Սիրով ու հարգանքով — աշխարհի բոլոր կանանց
        </motion.p>

        <motion.div
          className={styles.heart}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          💖
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <p className={styles.date}>8 Մարտ</p>
        </motion.div>

        <motion.div
          className={styles.divider}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.9 }}
        />

        <p className={styles.sub}>Ամեն օր ձեր տոնն է</p>
      </motion.div>
    </footer>
  )
}
