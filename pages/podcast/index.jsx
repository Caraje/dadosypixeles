import React from 'react'
import CardArticle from '../../components/CardArticle'
import MainLayout from '../../components/layout/MainLayout'
import { getAllFilesMetadata } from '../../lib/mdx'
const SEO = {
  title: 'Bienvenidos a Dados&pixeles',
  description: 'Bienvenidos a Dados y pixeles, una web dedicada a hablar de series, peliculas, videojuegos o juegos de mesa, un lugar donde compartir nuestros hobbies y nuestras aficiones',
  img:'/img_static/Logo_vertical.webp',
  url: 'https://www.dados&pixeles.com',
  author: '@DadosyPixeles'
}

const PodcastPage = ({posts}) => {
  const categoryPosts = posts.filter( post  => post.category === 'podcast')
  return (
    <MainLayout title={SEO.title} url={SEO.url} img={SEO.img} description={SEO.description} author={SEO.author} >

      <div className='container category__page'>
        <main className='category__page__news'>
          <div className='category__page__news__content'>
            <h1 className='category__page__news__content__title'>Podcast</h1>
            <div className='category__page__news__content__void'></div>
          </div>
          {
            categoryPosts.map( (post, id) => (<CardArticle key={id} post={post}/>))
          }      
        </main>
    </div>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata()
  return {
    props: {posts}
  }
}

export default PodcastPage