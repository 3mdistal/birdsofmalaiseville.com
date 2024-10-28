import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

export const getAllEssays = async () => {
  const payload = await getPayloadHMR({ config })
  const essays = await payload.find({
    collection: 'essays',
    where: {
      _status: {
        equals: 'published',
      },
    },
    sort: 'title',
    depth: 2,
    limit: 60,
  })
  return essays
}
