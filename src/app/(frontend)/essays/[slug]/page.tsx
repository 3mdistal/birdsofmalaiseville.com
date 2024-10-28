import { getEssay } from '@/utils/getEssay'

export default async function Essay({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const essay = (await getEssay(slug)).docs[0]
  return (
    <>
      <h1>{essay.title}</h1>
      {essay.sections.map((section, index) => (
        <div key={index} className="essay-section">
          <div dangerouslySetInnerHTML={{ __html: section.body_html as TrustedHTML }} />
        </div>
      ))}
      <h2>Bird Report</h2>
      <div dangerouslySetInnerHTML={{ __html: essay.birdReport_html as TrustedHTML }} />
    </>
  )
}
