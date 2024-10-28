import About from '@/components/homepage/about'
import Essays from '@/components/homepage/essays'
import { getHomepage } from '@/utils/getHomepage'

export default async function Home() {
  const homepage = await getHomepage()
  return (
    <>
      <Essays />
      <About />
    </>
  )
}
