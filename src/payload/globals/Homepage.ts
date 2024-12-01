import { GlobalConfig } from 'payload'
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'
import { revalidateHomepage } from '@/lib/utils/revalidate'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  admin: {
    group: 'Content',
  },
  hooks: {
    afterChange: [
      async () => {
        revalidateHomepage()
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'intro',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
      required: true,
    },
    lexicalHTML('intro', { name: 'intro_html' }),
    {
      name: 'essays',
      type: 'relationship',
      relationTo: 'essays',
      hasMany: true,
      admin: {
        isSortable: true,
        allowCreate: false,
        description:
          'The essays that will be displayed as interactive cards on the homepage. Order matters here, and you can click and drag to re-sort.',
      },
      required: true,
    },
    {
      name: 'bios',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'text',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
          }),
          required: true,
        },
        lexicalHTML('text', { name: 'text_html' }),
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
      required: true,
    },
  ],
  versions: {
    drafts: true,
    max: 10,
  },
}
