'use client'

import { motion } from 'framer-motion'
import styles from './SplashScreen.module.scss'

interface Props {
  onEnter: () => void
}

const petals = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 4,
  duration: 4 + Math.random() * 4,
  emoji: ['🌸', '🌺', '🌹', '🌷', '✨', '💕'][i % 6],
  size: 1.2 + Math.random() * 1.4,
}))

export default function SplashScreen({ onEnter }: Props) {
  return (
    <motion.div
      className={styles.overlay}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* floating petals */}
      {petals.map((p) => (
        <motion.span
          key={p.id}
          className={styles.petal}
          style={{ left: p.left, fontSize: `${p.size}rem` }}
          animate={{ y: ['-10vh', '110vh'], rotate: [0, 360], opacity: [0, 0.8, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'linear' }}
          aria-hidden="true"
        >
          {p.emoji}
        </motion.span>
      ))}

      {/* big 8 background */}
      <motion.div
        animate={{ scale: [1, 1.04, 1], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <div className={styles.bgNumber}>8</div>
      </motion.div>

      <div className={styles.content}>
        <motion.p
          className={styles.date}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          8 ՄԱՐՏ
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h1 className={styles.title}>Այսօր քո օրն է</h1>
        </motion.div>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Հատուկ շնորհավորանք է պատրաստված քեզ համար
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className={styles.from}>Արմանի կողմից</p>
        </motion.div>

        <motion.button
          className={styles.enterBtn}
          onClick={onEnter}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.6, type: 'spring', bounce: 0.4 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{ boxShadow: ['0 0 20px rgba(255,215,0,0.3)', '0 0 50px rgba(255,215,0,0.7)', '0 0 20px rgba(255,215,0,0.3)'] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={styles.btnInner}
          >
            <span className={styles.btnText}>Բաց կոմ</span>
            <span className={styles.btnArrow}>→</span>
          </motion.span>
        </motion.button>

        <motion.p
          className={styles.hint}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ delay: 2.2, duration: 2, repeat: Infinity }}
        >
          Սեղմիր՛ կոճակը
        </motion.p>
      </div>
    </motion.div>
  )
}
