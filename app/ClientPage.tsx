'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import SplashScreen from '@/components/SplashScreen/SplashScreen'
import Confetti from '@/components/Confetti/Confetti'
import Hero from '@/components/Hero/Hero'
import GreetingSection from '@/components/GreetingSection/GreetingSection'
import GifGallery from '@/components/GifGallery/GifGallery'
import WishCards from '@/components/WishCards/WishCards'
import Footer from '@/components/Footer/Footer'
import FlowerClick from '@/components/FlowerClick/FlowerClick'
import MusicPlayer from '@/components/MusicPlayer/MusicPlayer'
import BouquetBuilder from '@/components/BouquetBuilder/BouquetBuilder'
import ShareButton from '@/components/ShareButton/ShareButton'

export default function ClientPage() {
  const [entered, setEntered] = useState(false)

  return (
    <>
      <AnimatePresence>
        {!entered && <SplashScreen onEnter={() => setEntered(true)} />}
      </AnimatePresence>

      {entered && (
        <main>
          <Confetti />
          <FlowerClick />
          <Hero />
          <GreetingSection />
          <GifGallery />
          <WishCards />
          <Footer />
          <MusicPlayer autoStart />
          <BouquetBuilder />
          <ShareButton />
        </main>
      )}
    </>
  )
}
