import Image from 'next/image'
import type { Homepage } from '@payload-types'
import styles from './about.module.css'
import { smartQuotify } from '@/lib/utils/quotify'

const processHTML = (html: string) => {
  // Split the HTML into parts: text content and HTML tags
  const parts = html.split(/(<[^>]*>)/)

  return parts
    .map((part) => {
      // If it's an HTML tag
      if (part.startsWith('<')) {
        // If it's a link tag, ensure the URL is clean
        if (part.startsWith('<a')) {
          return part.replace(
            /(href=["'])(.*?)(["'])/g,
            (match, prefix, url, suffix) => `${prefix}${url.trim()}${suffix}`,
          )
        }
        return part
      }
      // If it's text content, apply smart quotes
      return smartQuotify(part)
    })
    .join('')
}

export default function About({ homepage }: { homepage: Homepage }) {
  return (
    <section className={styles.about}>
      <div className={styles.aboutTitleContainer}>
        <h2 className={styles.aboutTitle}>About</h2>
      </div>

      <div className={styles.bios}>
        {homepage.bios.map((bio) => {
          const processed = processHTML(bio.text_html ?? '')

          return (
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
                    dangerouslySetInnerHTML={{
                      __html: processed,
                    }}
                  />
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
