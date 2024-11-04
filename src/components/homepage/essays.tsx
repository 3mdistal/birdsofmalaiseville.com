'use client'

import { useLayoutEffect, useRef } from 'react'
import type { Homepage } from '@/payload-types'
import styles from './essays.module.css'
import Card from './card'

export default function Essays({ homepage }: { homepage: Homepage }) {
  const sideScrollerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (sideScrollerRef.current) {
      const width = sideScrollerRef.current.scrollWidth
      document.documentElement.style.setProperty('--side-scroller-width', `${width}px`)
    }
  }, [])

  return (
    <section className={styles.essaysSection}>
      <div ref={sideScrollerRef} className={styles.sideScroller}>
        {homepage.essays.map(
          (essay) =>
            typeof essay !== 'string' &&
            essay._status === 'published' && <Card key={essay.id} essay={essay} />,
        )}
      </div>
    </section>
  )
}
