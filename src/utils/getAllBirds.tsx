import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

export const getAllBirds = async () => {
  const payload = await getPayloadHMR({ config })
  const birds = await payload.find({
    collection: 'birds',
    sort: 'name',
  })
  return birds
}
