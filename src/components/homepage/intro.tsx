'use client'

import styles from './intro.module.css'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'next-view-transitions'
import { useLayoutEffect, useRef } from 'react'
import { Homepage } from '@payload-types'
import { smartQuotify } from '@/lib/utils/quotify'

export default function Intro({ homepage }: { homepage: Homepage }) {
  const stickyRef = useRef<HTMLDivElement>(null)
  const introFlexRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: introFlexRef,
    offset: ['start end', 'end start'],
  })

  const xLeft = useTransform(scrollYProgress, [0, 0.5], [-200, 0])
  const xRight = useTransform(scrollYProgress, [0, 0.5], [200, 0])

  useLayoutEffect(() => {
    if (stickyRef.current) {
      const height = stickyRef.current.offsetHeight
      document.documentElement.style.setProperty('--title-section-height', `${height}px`)
    }
  }, [])

  return (
    <section className={styles.intro}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <Image src="/trees.svg" alt="Trees" className={styles.trees} fill />
      </motion.div>
      <div className={styles.titleSection}>
        <div className={styles.sticky} ref={stickyRef}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {homepage.title}
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            {homepage.subtitle}
          </motion.p>
        </div>
      </div>
      <div className={styles.introSection}>
        <div ref={introFlexRef} className={styles.introFlex}>
          <motion.div style={{ x: xLeft }}>
            <div
              className={styles.introText}
              dangerouslySetInnerHTML={{ __html: smartQuotify(homepage.intro_html ?? '') }}
            />
          </motion.div>
          <motion.div style={{ x: xRight }}>
            <Link href="/essays" prefetch={true}>
              <Image className={styles.nest} src="/nest.svg" alt="Nest" width={400} height={400} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
