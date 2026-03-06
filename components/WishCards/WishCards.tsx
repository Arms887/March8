'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './WishCards.module.scss'

const cards = [
  {
    emoji: '🌹',
    title: 'Մայրերին',
    text: 'Մայրը կյանքի առաջին բառն է։ Շնորհակալ ենք սիրո, ջերմության և հոգատարության համար։ Շնորհավոր տոն, ամենաթանկ։',
    accent: '#ff1744',
    glow: 'rgba(255, 23, 68, 0.3)',
  },
  {
    emoji: '💕',
    title: 'Սիրելիներին',
    text: 'Դու իմ ոգեշնչումն ես, իմ ուրախությունը և ուժը։ Թող ամեն օր լի լինի երջանկությամբ և ջերմությամբ։',
    accent: '#ff69b4',
    glow: 'rgba(255, 105, 180, 0.3)',
  },
  {
    emoji: '👭',
    title: 'Ընկերուհիներին',
    text: 'Իսկական ընկերուհին հազվագյուտ նվեր է։ Շնորհակալ եմ, որ կաս կյանքիս մեջ։ Դու այն ավելի պայծառ ես դարձնում։',
    accent: '#e040fb',
    glow: 'rgba(224, 64, 251, 0.3)',
  },
  {
    emoji: '🌸',
    title: 'Քույրերին',
    text: 'Քույրն ճակատագրի կողմից ընծայված ընկերուհի է։ Ցանկանում եմ երջանկություն, ժպիտներ և կյանքի ամենապայծառ պահերը։',
    accent: '#ff6d00',
    glow: 'rgba(255, 109, 0, 0.3)',
  },
  {
    emoji: '💼',
    title: 'Գործընկերուհիներին',
    text: 'Սիրելի գործընկերուհիներ, դուք ամեն աշխատանքային օրը ավելի ջերմ ու պայծառ եք դարձնում։ Շնորհավոր հիանալի տոնը։',
    accent: '#ffd700',
    glow: 'rgba(255, 215, 0, 0.3)',
  },
]

export default function WishCards() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className={styles.section} ref={ref}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Շնորհավորանք բոլորին
      </motion.h2>

      <div className={styles.grid}>
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={styles.card}
            style={{ '--accent': card.accent, '--glow': card.glow } as React.CSSProperties & { '--accent': string; '--glow': string }}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: i * 0.1, duration: 0.55, type: 'spring', bounce: 0.3 }}
            whileHover={{ scale: 1.04, y: -6 }}
          >
            <div className={styles.emojiWrap}>
              <motion.span
                className={styles.cardEmoji}
                animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
              >
                {card.emoji}
              </motion.span>
            </div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardText}>{card.text}</p>
            <div className={styles.cardGlow} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
