import About from '@/components/homepage/about'
import Flock from '@/components/homepage/flock'
import Essays from '@/components/homepage/essays'
import Intro from '@/components/homepage/intro'
import { getHomepage } from '@/utils/getHomepage'

export default async function Home() {
  const homepage = await getHomepage()
  return (
    <>
      <Intro homepage={homepage} />
      <Flock />
      <Essays homepage={homepage} />
      <About homepage={homepage} />
    </>
  )
}
