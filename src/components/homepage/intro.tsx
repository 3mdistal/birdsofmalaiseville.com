import { getHomepage } from '@/utils/getHomepage'

export default async function Intro() {
  const homepage = await getHomepage()

  return (
    <section>
      <h1>{homepage.title}</h1>
      <p>{homepage.subtitle}</p>
      <div dangerouslySetInnerHTML={{ __html: homepage.intro_html as TrustedHTML }} />
    </section>
  )
}
