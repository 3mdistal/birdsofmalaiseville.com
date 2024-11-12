import About from '@/components/homepage/about'
import Flock from '@/components/homepage/flock'
import Essays from '@/components/homepage/essays'
import Intro from '@/components/homepage/intro'
import { getHomepage } from '@/utils/getHomepage'

export default async function Home() {
  const homepage = await getHomepage()
  return (
    <>
      <div
        style={{
          background:
            'linear-gradient(to bottom, var(--background-light) 0%, #D2CCC4 30%, var(--background-dark) 100%)',
        }}
      >
        <Intro homepage={homepage} />
        <Flock />
      </div>
      <Essays homepage={homepage} />
      <About homepage={homepage} />
    </>
  )
}
