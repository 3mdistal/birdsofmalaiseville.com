import type { Essay } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import styles from './card.module.css'

export default function Card({ essay }: { essay: Essay }) {
  return (
    <div className={styles.card}>
      <div className={styles.back}>
        <Image className={styles.cardBorder} src="/card-border.svg" alt="" fill />
        <h3 className={styles.title}>{essay.title}</h3>
        <div
          className={styles.quote}
          dangerouslySetInnerHTML={{ __html: essay.quote_html as string }}
        />
        <Link className={styles.readMore} href={`/essays/${essay.slug}`}>
          <p>Read More</p>
        </Link>
      </div>
      {typeof essay.bird !== 'string' && typeof essay.bird.cardWithText !== 'string' && (
        <Image
          className={styles.front}
          src={`${essay.bird.cardWithText.url}`}
          alt={essay.bird.cardWithText.alt}
          width={essay.bird.cardWithText.width ?? 0}
          height={essay.bird.cardWithText.height ?? 0}
        />
      )}
    </div>
  )
}
