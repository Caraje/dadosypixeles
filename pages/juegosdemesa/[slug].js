import React from 'react'
import {MDXRemote} from 'next-mdx-remote'
import { getAllFilesMetadata, getFileBySlug, getFiles } from '../../lib/mdx'
import MDXComponents from '../../components/MDXComponents'
import MainLayout from '../../components/layout/MainLayout'
import Image from 'next/image'
import Link from 'next/link'
import SocialNetworks from '../../components/SocialNetworks'
import LastPodcast from '../../components/LastPodcast'
import LastVideo from '../../components/LastVideo'
import { RecomendedCardsContainer } from '../../components/RecomendedCardsContainer'



const Post = ({source, frontmatter, content, posts}) => {
    const {slug, title, date, url, article, author, tags, category, img, alt, twitter, id} = frontmatter

    return (
        <MainLayout 
            title={title} 
            url={`http://localhost:3000/series/${url}`}  
            img={`https://res.cloudinary.com/www-dados-pixeles-com/image/upload/${img}`} 
            description={article} 
            author={twitter}
        >

            <div className='container articlePage'>
                <main className='articlePage__article'>
                        <div className='articlePage__article__imgGroup'>
                            <Image 
                                src={`https://res.cloudinary.com/www-dados-pixeles-com/image/upload/${img}`}
                                alt={alt} 
                                width={1000} 
                                height={450} 
                                objectFit='cover'
                                className='articlePage__article__imgGroup__img'
                            />
                            <div className='articlePage__article__imgGroup__void'></div>
                            <h1 className='articlePage__article__imgGroup__title'>
                                {title}
                            </h1>
                        </div>
                        <div className='articlePage__article__infoGroup'>
                            <div className='articlePage__article__infoGroup__category'>
                                <h2><Link href={`/${category.replace(/\s+/g, '').toLowerCase()}`} passHref><a>{category.toUpperCase()}</a></Link></h2>
                                <div className='articlePage__article__infoGroup__category__void'></div>
                            </div>
                            <div className='articlePage__article__infoGroup__info'>                                  
                                <h3>Escrito por: <Link href={`/author/${author}`}><a>{author}</a></Link></h3>
                                <h3>Fecha: <span>{date}</span></h3>
                            </div>
                            <div className='articlePage__article__text'>
                                <MDXRemote {...source} components={MDXComponents}/>        
                            </div>
                        </div>
                </main>
                <section className='home__page__highlight'>
                    <SocialNetworks />
                    <RecomendedCardsContainer posts={posts}/>
                    <LastPodcast episode='5IOV698OK2Ec2qJHiSitIl'/>
                    <LastVideo videoID='6GsxblACGaE' />
                </section>
            </div>

        </MainLayout>
    
    )
}






export const getStaticPaths = async () => {
    const posts = await getFiles() 
    const paths = posts.map((post) => ({
        params: {
            slug: post.replace(/\.mdx/, '')
        }
    }))


    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    const {slug} = params
    const posts = await getAllFilesMetadata()

    const { source, content, frontmatter } = await getFileBySlug(slug)
    
    return {
        props: {
            source, 
            frontmatter,
            content, 
            posts
        }
    }
}


export default Post