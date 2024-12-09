'use client'

import styles from './flock.module.css'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export default function Flock() {
  const containerRef = useRef(null)
  const [scrollDistance, setScrollDistance] = useState(-30000)

  useEffect(() => {
    const handleResize = () => {
      setScrollDistance(window.innerWidth <= 768 ? -15000 : -30000)
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Create different speeds for each bird
  const y = useTransform(scrollYProgress, [0, 1], [0, scrollDistance])

  // Fade out as they move up
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2])

  return (
    <div ref={containerRef} className={styles.flock}>
      <div className={styles.extraDarkDiv}></div>
      <motion.div className={styles.flockContent} style={{ opacity, y }}>
        <Image src="/flock.svg" alt="Flock" width={500} height={500} priority />
        <Image src="/flock.svg" alt="Flock" width={500} height={500} priority />
        <Image src="/flock.svg" alt="Flock" width={500} height={500} priority />
        <Image src="/flock.svg" alt="Flock" width={500} height={500} priority />
        <Image src="/flock.svg" alt="Flock" width={500} height={500} priority />
        <Image src="/flock.svg" alt="Flock" width={500} height={500} priority />
        <Image src="/flock.svg" alt="Flock" width={500} height={500} priority />
        <Image src="/flock.svg" alt="Flock" width={500} height={500} priority />
        <Image src="/flock.svg" alt="Flock" width={500} height={500} priority />
        <Image src="/flock.svg" alt="Flock" width={500} height={500} priority />
        <Image src="/flock.svg" alt="Flock" width={500} height={500} priority />
        <Image src="/flock.svg" alt="Flock" width={500} height={500} priority />
        <Image src="/flock.svg" alt="Flock" width={500} height={500} priority />
        <Image src="/flock.svg" alt="Flock" width={500} height={500} priority />
        <Image src="/flock.svg" alt="Flock" width={500} height={500} priority />
        <Image src="/flock.svg" alt="Flock" width={500} height={500} priority />
        <Image src="/flock.svg" alt="Flock" width={500} height={500} priority />
      </motion.div>
    </div>
  )
}
