import { getPayload } from 'payload'
import config from '@payload-config'

export const getEssaysByBird = async (bird: string) => {
  const payload = await getPayload({ config })
  const essays = await payload.find({
    collection: 'essays',
    where: {
      and: [{ bird: { equals: bird } }, { _status: { equals: 'published' } }],
    },
  })
  return essays
}
