import type { CollectionConfig } from 'payload'

const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
    group: 'Settings',
  },
  access: {
    read: ({ req, id }) => {
      const user = req.user
      return Boolean(user?.id === id || user?.isAdmin)
    },
    create: ({ req }) => {
      const user = req.user
      return Boolean(user && user.isAdmin)
    },
    update: ({ req, id }) => {
      const user = req.user
      return Boolean(user?.id === id || user?.isAdmin)
    },
    delete: ({ req }) => {
      const user = req.user
      return Boolean(user && user.isAdmin)
    },
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'isAdmin',
      type: 'checkbox',
      defaultValue: false,
      access: {
        read: () => true,
        create: ({ req: { user } }) => Boolean(user && user.isAdmin),
        update: ({ req: { user } }) => Boolean(user && user.isAdmin),
      },
    },
  ],
  timestamps: true,
}

export default Users
