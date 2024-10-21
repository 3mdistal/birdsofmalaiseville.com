import { GlobalConfig } from 'payload'

export const HomepageEssays: GlobalConfig = {
  slug: 'homepage-essays',
  admin: {
    group: 'Pages',
  },
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
  versions: {
    drafts: true,
    max: 10,
  },
}
