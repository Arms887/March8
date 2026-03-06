'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './GreetingSection.module.scss'

const lines = [
  { text: 'Սիրելի կին,', emphasis: false },
  { text: 'դու գեղեցկության մարմնացումն ես,', emphasis: false },
  { text: 'ուժի և քնքշության։', emphasis: true },
  { text: '', emphasis: false },
  { text: 'Քո ժպիտը լուսավորում է շրջապատդ,', emphasis: false },
  { text: 'քո սերը տաքացնում է սրտերը։', emphasis: true },
  { text: '', emphasis: false },
  { text: 'Թող այս հատուկ օրը', emphasis: false },
  { text: 'բերի քեզ ծաղիկներ, ժպիտներ', emphasis: false },
  { text: 'և ջերմության ծով։', emphasis: true },
  { text: '', emphasis: false },
  { text: 'Թող երազները կատարվեն,', emphasis: false },
  { text: 'իսկ երջանկությունը երբեք չհեռանա։', emphasis: true },
]

export default function GreetingSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.decorLeft} aria-hidden="true">🌹</div>
      <div className={styles.decorRight} aria-hidden="true">🌹</div>

      <motion.div
        className={styles.badge}
        initial={{ scale: 0, rotate: -10 }}
        animate={inView ? { scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.6, type: 'spring', bounce: 0.5 }}
      >
        ✨
      </motion.div>

      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Շնորհավոր տոն, սիրելի՛
      </motion.h2>

      <div className={styles.poem}>
        {lines.map((line, i) => (
          <motion.p
            key={i}
            className={`${styles.line} ${line.emphasis ? styles.emphasis : ''}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.07, duration: 0.55, ease: 'easeOut' }}
          >
            {line.text || '\u00A0'}
          </motion.p>
        ))}
      </div>

      <motion.div
        className={styles.divider}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 1.2, duration: 0.8 }}
      />
    </section>
  )
}
