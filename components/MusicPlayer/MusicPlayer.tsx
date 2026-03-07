'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './MusicPlayer.module.scss'

const MUSIC_URL = '/mardi8.mp3'

interface Props {
  audioElement?: HTMLAudioElement | null
}

export default function MusicPlayer({ audioElement }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(audioElement ?? null)
  const [playing, setPlaying] = useState(!!audioElement)
  const [ready, setReady] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    if (audioElement) {
      audioRef.current = audioElement
      const onReady = () => setReady(true)
      if (audioElement.readyState >= 4) {
        setReady(true)
      } else {
        audioElement.addEventListener('canplaythrough', onReady, { once: true })
      }
      return () => {
        audioElement.removeEventListener('canplaythrough', onReady)
      }
    } else {
      const audio = new Audio(MUSIC_URL)
      audio.loop = true
      audio.volume = 0.35
      audioRef.current = audio
      audio.addEventListener('canplaythrough', () => setReady(true), { once: true })
      return () => {
        audio.pause()
        audio.src = ''
      }
    }
  }, [audioElement])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().catch(() => {})
      setPlaying(true)
    }
  }

  const notes = ['♪', '♫', '♩', '♬']

  return (
    <div className={styles.wrap}>
      <AnimatePresence>
        {playing &&
          notes.map((note, i) => (
            <motion.span
              key={i}
              className={styles.note}
              initial={{ opacity: 0, y: 0, x: 0 }}
              animate={{ opacity: [0, 1, 0], y: -50 - i * 15, x: (i % 2 === 0 ? 1 : -1) * (10 + i * 8) }}
              transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.45, ease: 'easeOut' }}
              aria-hidden="true"
            >
              {note}
            </motion.span>
          ))}
      </AnimatePresence>

      <motion.button
        className={`${styles.btn} ${playing ? styles.active : ''}`}
        onClick={toggle}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={playing ? 'Դադарեцнел' : 'Նвагел'}
        title={playing ? 'Դадареcнел' : 'Нвагел'}
      >
        <motion.span
          animate={playing ? { rotate: 360 } : { rotate: 0 }}
          transition={playing ? { duration: 4, repeat: Infinity, ease: 'linear' } : {}}
          className={styles.icon}
        >
          {playing ? '🎵' : '🎶'}
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            className={styles.tooltip}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
          >
            {!ready ? 'Բеռнвум э...' : playing ? 'Դадарецнел' : 'Нвагел'}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
