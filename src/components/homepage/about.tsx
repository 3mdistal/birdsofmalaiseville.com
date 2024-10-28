import Image from 'next/image'
import { getHomepage } from '@/utils/getHomepage'

export default async function About() {
  const homepage = await getHomepage()
  return (
    <section>
      <h2>About</h2>
      {homepage.bios.map((bio) => (
        <div key={bio.id}>
          {typeof bio.image !== 'string' && (
            <Image
              src={bio.image.url ?? ''}
              alt={bio.image.alt}
              width={bio.image.width ?? 0}
              height={bio.image.height ?? 0}
            />
          )}
          <p>
            <span>{bio.name}</span>
            {bio.text_html && typeof bio.text_html !== 'string' && (
              <span dangerouslySetInnerHTML={{ __html: bio.text_html }} />
            )}
          </p>
        </div>
      ))}
    </section>
  )
}
