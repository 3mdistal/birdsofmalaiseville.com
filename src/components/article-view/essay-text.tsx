import { useMemo } from 'react'
import { Essay } from '@/payload-types'
import styles from './essay-text.module.css'
import { smartQuotify } from '@/utils/quotify'
import Image from 'next/image'
import React from 'react'

const DIVIDER_IMAGES = ['/feather1.svg', '/feather2.svg', '/feather3.svg'] as const

export default function EssayText({ essay }: { essay: Essay }) {
  // Choose a random starting index when the component mounts
  const startingIndex = useMemo(() => Math.floor(Math.random() * DIVIDER_IMAGES.length), [])

  // Get the feather image for a given section index
  const getFeatherImage = (sectionIndex: number) => {
    const featherIndex = (startingIndex + sectionIndex) % DIVIDER_IMAGES.length
    return DIVIDER_IMAGES[featherIndex]
  }

  return (
    <div className={styles.essayText}>
      {essay.sections.map((section, index) => (
        <React.Fragment key={index}>
          <div
            style={{ display: 'contents' }}
            dangerouslySetInnerHTML={{ __html: smartQuotify(section.body_html ?? '') }}
          />
          {index < essay.sections.length - 1 && (
            <Image
              className={styles.feather}
              src={getFeatherImage(index)}
              alt=""
              width={100}
              height={100}
              suppressHydrationWarning
            />
          )}
        </React.Fragment>
      ))}
      <Image className={styles.branch} src="/branch.svg" alt="" width={100} height={100} />
      <h2 className={styles.birdReportTitle}>Bird Report</h2>
      <div
        className={styles.birdReportText}
        style={{ display: 'contents' }}
        dangerouslySetInnerHTML={{ __html: smartQuotify(essay.birdReport_html ?? '') }}
      />
    </div>
  )
}
