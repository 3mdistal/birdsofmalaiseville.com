import EssayFrame from '@/components/article-view/essay-frame'
import { getEssay } from '@/utils/getEssay'

export default async function Essay({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const essay = (await getEssay(slug)).docs[0]
  return <EssayFrame essay={essay} />
}
