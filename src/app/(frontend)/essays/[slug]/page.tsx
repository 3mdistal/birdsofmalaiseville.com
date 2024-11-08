import { getEssay } from '@/utils/getEssay'
import Image from 'next/image'
import Link from 'next/link'

export default async function Essay({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const essay = (await getEssay(slug)).docs[0]
  return (
    <>
      <h1>{essay.title}</h1>
      {typeof essay.bird !== 'string' && typeof essay.bird.cardWithoutText !== 'string' && (
        <Image
          src={essay.bird.cardWithoutText.url ?? ''}
          alt={essay.bird.cardWithoutText.alt}
          width={essay.bird.cardWithoutText.width ?? 0}
          height={essay.bird.cardWithoutText.height ?? 0}
        />
      )}
      {essay.sections.map((section, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: section.body_html as TrustedHTML }} />
          {index !== essay.sections.length - 1 && <hr />}
        </div>
      ))}
      <h2>Bird Report</h2>
      <div dangerouslySetInnerHTML={{ __html: essay.birdReport_html as TrustedHTML }} />
      <Link href="/essays">
        <p>View All Essays</p>
      </Link>
    </>
  )
}
