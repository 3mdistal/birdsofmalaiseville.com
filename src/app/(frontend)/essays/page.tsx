import IndexView from '@/components/index-view/index-view'
import { getAllBirds } from '@/utils/getAllBirds'
import { getEssaysByBird } from '@/utils/getEssaysByBird'

export default async function Essays() {
  const birds = await getAllBirds()

  // Todo: Make birds sortable in CMS.

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

  return <IndexView birdsWithEssays={birdsWithEssays} />
}
