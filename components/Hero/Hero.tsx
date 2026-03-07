'use client'

import { motion } from 'framer-motion'
import styles from './Hero.module.scss'

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768
const floatingItems = isMobile
  ? ['🌸', '🌺', '🌹', '🌷', '💐', '💕']
  : ['🌸', '🌺', '🌹', '🌷', '💐', '🌸', '🌺', '🌹', '💕', '✨']

const sparkles = Array.from({ length: isMobile ? 5 : 12 }, (_, i) => ({
  id: i,
  top: `${10 + Math.random() * 80}%`,
  left: `${5 + Math.random() * 90}%`,
  delay: i * 0.3,
  size: 8 + Math.floor(Math.random() * 16),
}))

export default function Hero() {
  return (
    <section className={styles.hero}>
      {sparkles.map((s) => (
        <motion.span
          key={s.id}
          className={styles.sparkle}
          style={{ top: s.top, left: s.left, fontSize: s.size }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: isMobile ? 3.5 : 2.5, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          ✦
        </motion.span>
      ))}

      <div className={styles.dateWrap}>
        <div className={styles.numberWrap}>
          <div className={styles.number}>8</div>
        </div>

        <motion.div
          className={styles.month}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, type: 'spring', bounce: 0.4 }}
        >
          ՄԱՐՏ
        </motion.div>
      </div>

      <motion.p
        className={styles.tagline}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        Կանանց միջազգային օր 

      </motion.p>
      <motion.p
        className={styles.tagline}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        ՄարԴի 8- երբ մարդկանց կեսը ուրախ է կեսը՝ Տղա :😊 
      </motion.p>
      <motion.div
        className={styles.flowers}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        {floatingItems.map((item, i) => (
          <motion.span
            key={i}
            className={styles.flower}
            animate={isMobile ? { y: [0, -10, 0] } : { y: [0, -18, 0], rotate: [0, 8, -8, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 3 + i * 0.2, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
          >
            {item}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span>Իջեցրեք ներքև</span>
        <motion.div
          className={styles.scrollLine}
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.7, 0.2, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
