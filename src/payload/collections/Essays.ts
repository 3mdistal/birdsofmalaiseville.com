import { CollectionConfig } from 'payload'
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'
import { revalidateEssay } from '@/lib/utils/revalidate'

export const Essays: CollectionConfig = {
  slug: 'essays',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
  },
  hooks: {
    afterChange: [
      async ({ doc }) => {
        if (doc._status === 'published') {
          revalidateEssay(doc.slug)
        }
      },
    ],
    afterDelete: [
      async ({ doc }) => {
        if (doc.slug) {
          revalidateEssay(doc.slug)
        }
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
        description: 'The url of the essay (after `https://birdsofmalaiseville.com/essays/`).',
      },
    },
    {
      name: 'bird',
      type: 'relationship',
      relationTo: 'birds',
      required: true,
      hasMany: false,
      admin: {
        position: 'sidebar',
        description: 'The bird that this essay is related to.',
      },
    },
    {
      name: 'quote',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
      required: true,
      admin: {
        position: 'sidebar',
        description:
          'A quotation from the essay that acts as a preview for the user on the card. Strict word limit because of space available.',
      },
    },
    lexicalHTML('quote', { name: 'quote_html' }),
    {
      name: 'sections',
      type: 'array',
      fields: [
        {
          name: 'body',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
          }),
        },
        lexicalHTML('body', { name: 'body_html' }),
      ],
      admin: {
        description:
          "The body text (all of it if there's no sections), copied & pasted from your text editor. Each individual section will be separated by a feather.",
      },
      required: true,
    },
    {
      name: 'birdReport',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
    },
    lexicalHTML('birdReport', { name: 'birdReport_html' }),
  ],
  versions: {
    drafts: true,
    maxPerDoc: 10,
  },
}
