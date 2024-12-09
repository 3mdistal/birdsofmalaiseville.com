'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { Homepage } from '@payload-types'
import styles from './essays.module.css'
import Card from './card'

export default function Essays({ homepage }: { homepage: Homepage }) {
  const containerRef = useRef<HTMLElement>(null)
  const sideScrollerRef = useRef<HTMLDivElement>(null)
  const [sideScrollerWidth, setSideScrollerWidth] = useState(0)
  const [sideScrollerHeight, setSideScrollerHeight] = useState(0)
  const [isWideViewport, setIsWideViewport] = useState(false)

  // Get scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Transform scrollY progress into negative X position only for wide viewports
  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    isWideViewport ? [0, -sideScrollerWidth] : [0, 0],
  )

  useLayoutEffect(() => {
    const checkViewport = () => {
      setIsWideViewport(window.innerWidth >= 768) // 48rem = 768px
    }

    checkViewport() // Initial check
    window.addEventListener('resize', checkViewport)

    if (sideScrollerRef.current) {
      const width = sideScrollerRef.current.scrollWidth
      setSideScrollerWidth(width)
      document.documentElement.style.setProperty('--side-scroller-width', `${width}px`)

      const height = sideScrollerRef.current.scrollHeight
      setSideScrollerHeight(height)
      document.documentElement.style.setProperty('--side-scroller-height', `${height}px`)
    }

    return () => window.removeEventListener('resize', checkViewport)
  }, [])

  return (
    <section ref={containerRef} className={styles.essaysSection} id="cards">
      <motion.div ref={sideScrollerRef} className={styles.sideScroller} style={{ x: translateX }}>
        {homepage.essays.map(
          (essay) =>
            typeof essay !== 'string' &&
            essay._status === 'published' && <Card key={essay.id} essay={essay} />,
        )}
      </motion.div>
    </section>
  )
}
