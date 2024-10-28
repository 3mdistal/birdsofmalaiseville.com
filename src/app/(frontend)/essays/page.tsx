import { getAllEssays } from '@/utils/getAllEssays'
import Image from 'next/image'

export default async function Essays() {
  const essays = await getAllEssays()
  return (
    <>
      {essays.docs.map((essay) => (
        <div key={essay.id}>
          <h2>{essay.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: essay.quote_html as TrustedHTML }} />
          {typeof essay.bird !== 'string' && typeof essay.bird?.cardWithText !== 'string' && (
            <Image
              src={essay.bird.cardWithText.url ?? ''}
              alt={essay.bird.cardWithText.alt}
              width={essay.bird.cardWithText.width ?? 0}
              height={essay.bird.cardWithText.height ?? 0}
            />
          )}
        </div>
      ))}
    </>
  )
}
