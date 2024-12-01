import IndexView from '@/components/index-view/index-view'
import IndexViewBackground from '@/components/index-view/index-view-background'
import { getAllBirds } from '@/lib/utils/getAllBirds'
import { getEssaysByBird } from '@/lib/utils/getEssaysByBird'
import { Metadata } from 'next'

const description =
  'Explore our collection of essays about the birds of Malaiseville, each one telling a unique story through art and words.'

export const metadata: Metadata = {
  title: 'Essays',
  description,
  openGraph: {
    title: 'Essays | Birds of Malaiseville',
    description,
  },
  twitter: {
    title: 'Essays | Birds of Malaiseville',
    description,
  },
}

export default async function Essays() {
  const birds = await getAllBirds()

  const birdsWithEssays = (
    await Promise.all(
      birds.docs.map(async (bird) => {
        const essays = await getEssaysByBird(bird.id)
        return {
          bird,
          essays: essays.docs,
        }
      }),
    )
  )
    .filter((birdWithEssays) => birdWithEssays.essays.length > 0)
    .sort(() => Math.random() - 0.5)

  return (
    <>
      <IndexView birdsWithEssays={birdsWithEssays} />
      <IndexViewBackground />
    </>
  )
}
