import { getHomepage } from '@/utils/getHomepage'
import Image from 'next/image'

export default async function Home() {
  const homepage = await getHomepage()
  return (
    <>
      <h1>{homepage.title}</h1>
      <p>{homepage.subtitle}</p>
      <div dangerouslySetInnerHTML={{ __html: homepage.intro_html as TrustedHTML }} />
      <div>
        {homepage.essays.map(
          (essay) =>
            typeof essay !== 'string' &&
            essay._status === 'published' && (
              <div key={essay.id}>
                <h2>{essay.title}</h2>
                {typeof essay.bird !== 'string' && typeof essay.bird.cardWithText !== 'string' && (
                  <Image
                    src={essay.bird.cardWithText.url ?? ''}
                    alt={essay.bird.cardWithText.alt}
                    width={essay.bird.cardWithText.width ?? 0}
                    height={essay.bird.cardWithText.height ?? 0}
                  />
                )}
                <div dangerouslySetInnerHTML={{ __html: essay.quote_html as TrustedHTML }} />
              </div>
            ),
        )}
      </div>
    </>
  )
}
