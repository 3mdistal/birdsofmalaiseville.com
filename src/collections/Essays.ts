import { CollectionConfig } from 'payload'

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
  versions: {
    drafts: {
      autosave: true,
    },
    maxPerDoc: 10,
  },
}
