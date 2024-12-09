import { getPayload } from 'payload'
import config from '@payload-config'

export const getEssay = async (slug: string) => {
  const payload = await getPayload({ config })

  const essay = await payload.find({
    collection: 'essays',
    where: {
      slug: { equals: slug },
    },
    depth: 2,
  })

  return essay
}
