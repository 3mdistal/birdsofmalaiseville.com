import { GlobalConfig } from 'payload'

export const HomepageEssays: GlobalConfig = {
  slug: 'homepage-essays',
  fields: [
    {
      name: 'cards',
      type: 'relationship',
      relationTo: 'essays',
      hasMany: true,
      admin: {
        isSortable: true,
      },
    },
  ],
}
