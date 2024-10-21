import { CollectionConfig } from 'payload'
import slugify from 'slugify'

export const Essays: CollectionConfig = {
  slug: 'essays',
  admin: {
    useAsTitle: 'title',
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
        hidden: true,
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
      required: true,
      admin: {
        position: 'sidebar',
        description:
          'A quotation from the essay that acts as a preview for the user on the card. Strict word limit because of space available.',
      },
    },
    {
      name: 'sections',
      type: 'array',
      fields: [
        {
          name: 'body',
          type: 'richText',
        },
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
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data.title) {
          data.slug = slugify(data.title, { lower: true })
        }
        return data
      },
    ],
  },
  versions: {
    drafts: true,
    maxPerDoc: 10,
  },
}
