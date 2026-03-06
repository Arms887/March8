'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './ShareButton.module.scss'

export default function ShareButton() {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const url = typeof window !== 'undefined' ? window.location.href : ''
  const text = 'Շնորհավոր 8 Մարտ! Կանանց միջազգային օրդ շնորհավոր! 🌸'

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback: select and copy
    }
  }

  const shareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank')
  }

  const shareTelegram = () => {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <div className={styles.wrap}>
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.menu}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ type: 'spring', bounce: 0.4 }}
          >
            <button className={styles.option} onClick={copyLink}>
              <span>{copied ? '✅' : '🔗'}</span>
              <span>{copied ? 'Պատճենված!' : 'Պատճենել հղումը'}</span>
            </button>
            <button className={`${styles.option} ${styles.whatsapp}`} onClick={shareWhatsApp}>
              <span>💬</span>
              <span>WhatsApp</span>
            </button>
            <button className={`${styles.option} ${styles.telegram}`} onClick={shareTelegram}>
              <span>✈️</span>
              <span>Telegram</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={styles.btn}
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Կիսվել"
        title="Կիսվել"
      >
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ display: 'inline-block' }}
        >
          {open ? '✕' : '🔗'}
        </motion.span>
      </motion.button>
    </div>
  )
}
