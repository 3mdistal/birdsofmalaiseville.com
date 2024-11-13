import type { Bird, Essay } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { dumbQuotify, smartQuotify } from '@/utils/quotify'
import styles from './index-view.module.css'

export default function IndexView({
  birdsWithEssays,
}: {
  birdsWithEssays: { bird: Bird; essays: Essay[] }[]
}) {
  return (
    <>
      <div className={styles.indexView}>
        <h1>Birds of Malaiseville</h1>
        {birdsWithEssays.map(({ bird, essays }) => (
          <div key={bird.id} className={styles.birdContainer}>
            {typeof bird.cardWithText !== 'string' && (
              <Image
                src={bird.cardWithText.url ?? ''}
                alt={bird.cardWithText.alt}
                width={bird.cardWithText.width ?? 0}
                height={bird.cardWithText.height ?? 0}
                className={styles.birdImage}
              />
            )}
            <div className={styles.essaysContainer}>
              {essays.map((essay) => (
                <div key={essay.id} className={styles.essay}>
                  <Link href={`/essays/${essay.slug}`}>
                    <h2>{dumbQuotify(essay.title)}</h2>
                    <div
                      dangerouslySetInnerHTML={{ __html: smartQuotify(essay.quote_html ?? '') }}
                    />
                    <h3>Read More</h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}