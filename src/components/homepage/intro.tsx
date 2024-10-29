'use client'

import styles from './intro.module.css'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { Homepage } from '@/payload-types'

export default function Intro(homepage: Homepage) {
  const stickyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (stickyRef.current) {
      const height = stickyRef.current.offsetHeight
      document.documentElement.style.setProperty('--title-section-height', `${height}px`)
      console.log(height)
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
        <div
          className={styles.introText}
          dangerouslySetInnerHTML={{ __html: homepage.intro_html as TrustedHTML }}
        />
        <Image className={styles.nest} src="/nest.svg" alt="Nest" width={100} height={100} />
      </div>
    </section>
  )
}
