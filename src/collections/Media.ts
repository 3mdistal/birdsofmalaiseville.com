import type { CollectionConfig } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Media: CollectionConfig = {
  slug: 'media',
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    imageSizes: [
      {
        name: 'large',
        width: 480,
        fit: 'contain',
      },
      {
        name: 'small',
        width: 240,
        fit: 'contain',
      },
      {
        name: 'thumbnail',
        width: 120,
        fit: 'contain',
      },
    ],
    mimeTypes: ['image/*'],
    adminThumbnail: 'thumbnail',
    disableLocalStorage: true,
    displayPreview: true,
    formatOptions: {
      format: 'webp',
    },
  },
}
