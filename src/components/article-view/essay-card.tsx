import { Bird } from '@payload-types'
import styles from './essay-card.module.css'
import Image from 'next/image'

export default function EssayCard({ card }: { card: Bird }) {
  if (typeof card.cardWithoutText === 'string') {
    return null
  }

  const media = card.cardWithoutText

  return (
    <div className={styles.essayCard}>
      <div style={{ viewTransitionName: `bird-${card.id}` }}>
        <Image
          src={media.url ?? ''}
          alt={media.alt ?? ''}
          width={media.width ?? 0}
          height={media.height ?? 0}
        />
      </div>
    </div>
  )
}
