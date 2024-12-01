import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

export const getHomepage = async () => {
  const payload = await getPayloadHMR({ config })
  const homepage = await payload.findGlobal({ slug: 'homepage', depth: 3 })
  return homepage
}
