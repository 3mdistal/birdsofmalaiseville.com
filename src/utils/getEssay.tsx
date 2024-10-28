import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

export const getEssay = async (slug: string) => {
  const payload = await getPayloadHMR({ config })

  const essay = await payload.find({
    collection: 'essays',
    where: {
      slug: { equals: slug },
    },
    depth: 2,
  })

  console.log(essay.docs[0])
  return essay
}
