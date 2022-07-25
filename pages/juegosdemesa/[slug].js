import React from 'react'
import { getAllFilesMetadata, getFileBySlug, getFiles } from '../../lib/mdx'
import MainLayout from '../../components/layout/MainLayout'
import SlugComponent from '../../components/PageStructure/SlugComponent'



const Post = ({source, frontmatter, posts}) => {
    const {title, url, article, img, twitter, tags } = frontmatter

    return (
        <MainLayout 
            title={title} 
            url={`http://localhost:3000/series/${url}`}  
            img={`https://res.cloudinary.com/www-dados-pixeles-com/image/upload/${img}`} 
            description={article} 
            author={twitter}
            tags={tags}
        >
            <SlugComponent frontmatter={frontmatter} source={source} posts={posts} />
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