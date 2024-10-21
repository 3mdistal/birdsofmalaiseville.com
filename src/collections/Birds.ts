import type { CollectionConfig } from 'payload'

export const Birds: CollectionConfig = {
  slug: 'birds',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'The name of the bird on the card.',
    },
    {
      name: 'cardWithText',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'The card corresponding with the named bird.',
    },
    {
      name: 'cardWithoutText',
      type: 'upload',
      relationTo: 'media',
      label: 'A version of the card without the label.',
    },
  ],
}
