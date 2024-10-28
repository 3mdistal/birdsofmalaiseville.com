import { getAllBirds } from '@/utils/getAllBirds'
import { getEssaysByBird } from '@/utils/getEssaysByBird'
import Image from 'next/image'

export default async function Essays() {
  const birds = await getAllBirds()

  // Create an array of birds with their essays
  const birdsWithEssays = await Promise.all(
    birds.docs.map(async (bird) => {
      const essays = await getEssaysByBird(bird.id)
      return {
        bird,
        essays: essays.docs,
      }
    }),
  )

  return (
    <>
      {birdsWithEssays.map(({ bird, essays }) => (
        <div key={bird.id} className="bird-section">
          {/* Bird card - shown once */}
          {typeof bird.cardWithText !== 'string' && (
            <Image
              src={bird.cardWithText.url ?? ''}
              alt={bird.cardWithText.alt}
              width={bird.cardWithText.width ?? 0}
              height={bird.cardWithText.height ?? 0}
            />
          )}

          {/* Essays for this bird */}
          {essays.map((essay) => (
            <div key={essay.id} className="essay">
              <a href={`/essays/${essay.slug}`}>
                <h2>{essay.title}</h2>
              </a>
              <div dangerouslySetInnerHTML={{ __html: essay.quote_html as TrustedHTML }} />
            </div>
          ))}
        </div>
      ))}
    </>
  )
}
