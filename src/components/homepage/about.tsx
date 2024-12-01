import Image from 'next/image'
import type { Homepage } from '@payload-types'
import styles from './about.module.css'
import { smartQuotify } from '@/lib/utils/quotify'

export default function About({ homepage }: { homepage: Homepage }) {
  return (
    <section className={styles.about}>
      <div className={styles.aboutTitleContainer}>
        <h2 className={styles.aboutTitle}>About</h2>
      </div>

      <div className={styles.bios}>
        {homepage.bios.map((bio) => (
          <div className={styles.bio} key={bio.id}>
            {typeof bio.image !== 'string' && (
              <Image
                className={styles.bioImage}
                src={bio.image.url ?? ''}
                alt={bio.image.alt}
                width={bio.image.width ?? 0}
                height={bio.image.height ?? 0}
              />
            )}
            <div className={styles.bioContent}>
              <p className={styles.bioName}>{bio.name}</p>
              {bio.text_html && (
                <div
                  className={styles.bioText}
                  dangerouslySetInnerHTML={{ __html: smartQuotify(bio.text_html ?? '') }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
