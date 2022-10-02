import LastPodcast from '../components/ComponentsMultimedia/LastPodcast'
import LastVideo from '../components/ComponentsMultimedia/LastVideo'
import CardArticle from '../components/ComponentsPage/CardArticle'
import SocialNetworks from '../components/ComponentsPage/SocialNetworks'
import MainLayout from '../components/layout/MainLayout'
import { getAllFilesMetadata } from '../lib/mdx'

const SEO = {
  title: 'Bienvenidos a Dados&pixeles',
  description:
    'Bienvenidos a Dados y pixeles, una web dedicada a hablar de series, peliculas, videojuegos o juegos de mesa, un lugar donde compartir nuestros hobbies y nuestras aficiones',
  img: 'https://res.cloudinary.com/www-dados-pixeles-com/image/upload/v1658397180/Logo_img_kcetac.webp',
  url: 'https://www.dados&pixeles.com',
  author: '@DadosyPixeles',
  tags: 'Dados y pixeles, videojuegos, juegos de mesa, series, television, cine, peliculas, friki',
}

export default function Home({ posts }) {
  const newPost = posts.sort((a, b) => b.id - a.id)

  return (
    <MainLayout
      title={SEO.title}
      url={SEO.url}
      img={SEO.img}
      description={SEO.description}
      author={SEO.author}
      tags={SEO.tags}
    >
      <div className='container home__page'>
        <main className='home__page__news'>
          <div className='home__page__news__content'>
            <h1 className='home__page__news__content__title'>
              Últimos Artículos
            </h1>
            <div className='home__page__news__content__void'></div>
          </div>
          {newPost.slice(0, 10).map((post, id) => (
            <CardArticle key={id} post={post} />
          ))}
        </main>

        <section className='home__page__highlight'>
          <SocialNetworks />
          <LastPodcast episode='5hPNPqKhmjOaZHwgBmKVAD' />
          <LastVideo videoID='uuEKEIM4jXo' />
        </section>
      </div>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata()
  return {
    props: { posts },
  }
}
