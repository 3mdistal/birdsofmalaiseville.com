'use client'

import EssayCard from './essay-card'
import EssayText from './essay-text'
import { Bird, Essay } from '@payload-types'
import { Link } from 'next-view-transitions'
import { dumbQuotify } from '@/lib/utils/quotify'
import styles from './essay-frame.module.css'

// todo: Add a way to go to next and previous essays.

export default function EssayFrame({ essay }: { essay: Essay }) {
  console.log('Essay Frame - Essay:', essay)
  console.log('Essay Frame - Bird:', essay.bird)
  const birdId = typeof essay.bird !== 'string' ? essay.bird.id : null

  return (
    <div className={styles.essayFrame}>
      <h1 style={{ viewTransitionName: `title-${essay.slug}` }}>{dumbQuotify(essay.title)}</h1>
      <div className={styles.essayContent}>
        <div>
          <EssayCard card={essay.bird as Bird} />
        </div>
        <EssayText essay={essay} />
      </div>
      <div className={styles.links}>
        <button onClick={() => window.history.back()}>
          <p>Back</p>
        </button>
        <Link href={`/essays`}>
          <p>All Essays</p>
        </Link>
      </div>
    </div>
  )
}
