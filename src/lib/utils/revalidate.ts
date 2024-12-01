import { revalidatePath } from 'next/cache'

export const revalidateEssay = (slug: string) => {
  // Revalidate the specific essay page
  revalidatePath(`/essays/${slug}`)
  // Revalidate the essays listing page
  revalidatePath('/essays')
  // Revalidate the homepage which also shows essays
  revalidatePath('/')
}

export const revalidateHomepage = () => {
  revalidatePath('/')
}
