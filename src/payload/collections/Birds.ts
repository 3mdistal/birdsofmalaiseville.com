import type { CollectionConfig } from 'payload'

export const Birds: CollectionConfig = {
  slug: 'birds',
  admin: {
    useAsTitle: 'name',
    group: 'Content',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user && user.isAdmin),
    update: ({ req: { user } }) => Boolean(user && user.isAdmin),
    delete: ({ req: { user } }) => Boolean(user && user.isAdmin),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'cardWithText',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'The card corresponding with the named bird.',
      },
    },
    {
      name: 'cardWithoutText',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'A version of the card without the label.',
      },
      required: true,
    },
  ],
}
