import { getAllBirds } from '@/utils/getAllBirds'
import Image from 'next/image'

export default async function Birds() {
  const birds = await getAllBirds()

  return (
    <div>
      {birds.docs.map((bird) => {
        if (typeof bird.cardWithText === 'string') return null

        return (
          <div key={bird.id}>
            <Image
              src={bird.cardWithText.url ?? ''}
              alt={bird.cardWithText.alt ?? ''}
              width={bird.cardWithText.width ?? 100}
              height={bird.cardWithText.height ?? 100}
            />
          </div>
        )
      })}
    </div>
  )
}
