import EssayFrame from '@/components/article-view/essay-frame'
import { getEssay } from '@/lib/utils/getEssay'
import { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const essay = (await getEssay(resolvedParams.slug)).docs[0]
  const birdImage =
    typeof essay.bird !== 'string' && typeof essay.bird.cardWithText !== 'string'
      ? essay.bird.cardWithText
      : null

  const description = essay.quote_html?.replace(/<[^>]*>/g, '').slice(0, 200) + '...'

  return {
    title: essay.title,
    description,
    openGraph: {
      type: 'article',
      title: essay.title,
      description,
      ...(birdImage && {
        images: [
          {
            url: birdImage.url || '',
            width: birdImage.width || 1200,
            height: birdImage.height || 630,
            alt: birdImage.alt,
          },
        ],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: essay.title,
      description,
      ...(birdImage && {
        images: [
          {
            url: birdImage.url || '',
            width: birdImage.width || 1200,
            height: birdImage.height || 630,
            alt: birdImage.alt,
          },
        ],
      }),
    },
  }
}

export const dynamic = 'force-dynamic'

export default async function Essay({ params }: Props) {
  const resolvedParams = await params
  const essay = (await getEssay(resolvedParams.slug)).docs[0]
  return <EssayFrame essay={essay} />
}
