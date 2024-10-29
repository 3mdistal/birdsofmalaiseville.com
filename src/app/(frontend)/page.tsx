import About from '@/components/homepage/about'
import Essays from '@/components/homepage/essays'
import Intro from '@/components/homepage/intro'
import { getHomepage } from '@/utils/getHomepage'

export default async function Home() {
  const homepage = await getHomepage()
  return (
    <>
      <Intro />
      <Essays />
      <About />
    </>
  )
}
