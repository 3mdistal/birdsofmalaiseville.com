'use client'

import styles from './intro.module.css'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { Homepage } from '@/payload-types'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Intro(homepage: Homepage) {
  const stickyRef = useRef<HTMLDivElement>(null)
  const introFlexRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: introFlexRef,
    offset: ['start end', 'end start'],
  })

  const xLeft = useTransform(scrollYProgress, [0, 0.5], [-200, 0])
  const xRight = useTransform(scrollYProgress, [0, 0.5], [200, 0])

  useEffect(() => {
    if (stickyRef.current) {
      const height = stickyRef.current.offsetHeight
      document.documentElement.style.setProperty('--title-section-height', `${height}px`)
    }
  }, [])

  return (
    <section className={styles.intro}>
      <Image src="/trees.svg" alt="Trees" className={styles.trees} fill />
      <div className={styles.titleSection}>
        <div className={styles.sticky} ref={stickyRef}>
          <h1 className={styles.title}>{homepage.title}</h1>
          <p className={styles.subtitle}>{homepage.subtitle}</p>
        </div>
      </div>
      <div className={styles.introSection}>
        <div ref={introFlexRef} className={styles.introFlex}>
          <motion.div style={{ x: xLeft }}>
            <div
              className={styles.introText}
              dangerouslySetInnerHTML={{ __html: homepage.intro_html as TrustedHTML }}
            />
          </motion.div>
          <motion.div style={{ x: xRight }}>
            <Image className={styles.nest} src="/nest.svg" alt="Nest" width={400} height={400} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
