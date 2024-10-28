import { getHomepage } from '@/utils/getHomepage'
import Image from 'next/image'
import Link from 'next/link'

export default async function Essays() {
  const homepage = await getHomepage()

  return (
    <section>
      <h2>Essays</h2>
      {homepage.essays.map(
        (essay) =>
          typeof essay !== 'string' &&
          essay._status === 'published' && (
            <div key={essay.id}>
              <Link href={`/essays/${essay.slug}`}>
                <h3>{essay.title}</h3>
              </Link>
              {typeof essay.bird !== 'string' && typeof essay.bird.cardWithText !== 'string' && (
                <Image
                  src={essay.bird.cardWithText.url ?? ''}
                  alt={essay.bird.cardWithText.alt}
                  width={essay.bird.cardWithText.width ?? 0}
                  height={essay.bird.cardWithText.height ?? 0}
                />
              )}
              {essay.quote_html && typeof essay.quote_html !== 'string' && (
                <div dangerouslySetInnerHTML={{ __html: essay.quote_html }} />
              )}
            </div>
          ),
      )}
    </section>
  )
}
