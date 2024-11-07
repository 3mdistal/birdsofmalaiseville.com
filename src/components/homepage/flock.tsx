import styles from './flock.module.css'
import Image from 'next/image'

export default function Flock() {
  return (
    <div className={styles.flock}>
      <div className={styles.extraDarkDiv}></div>
      <div className={styles.flockContent}>
        {/* <Image src="/flock.svg" alt="Flock" width={100} height={100} /> */}
      </div>
    </div>
  )
}
