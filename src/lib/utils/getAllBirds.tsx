import { getPayload } from 'payload'
import config from '@payload-config'

export const getAllBirds = async () => {
  const payload = await getPayload({ config })
  const birds = await payload.find({
    collection: 'birds',
    sort: 'name',
    limit: 30,
  })
  return birds
}
