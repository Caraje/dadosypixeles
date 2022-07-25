import React from 'react'
import MainLayout from '../../components/layout/MainLayout'
import IndexComponent from '../../components/PageStructure/IndexComponent'
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
  const category = 'Podcast'
  return (
    <MainLayout title={SEO.title} url={SEO.url} img={SEO.img} description={SEO.description} author={SEO.author} >
      <div className='content__cards'>
        <IndexComponent posts={categoryPosts} category={category}/>
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