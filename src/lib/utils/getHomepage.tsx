import { getPayload } from 'payload'
import config from '@payload-config'

export const getHomepage = async () => {
  const payload = await getPayload({ config })
  const homepage = await payload.findGlobal({ slug: 'homepage', depth: 3 })
  return homepage
}
