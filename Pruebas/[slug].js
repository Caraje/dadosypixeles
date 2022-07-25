import React from 'react'
import {MDXRemote} from 'next-mdx-remote'

import { getFileBySlug, getFiles } from '../lib/mdx'
import MDXComponents from '../components/MDXComponents'

const Post = ({source, frontmatter, content}) => {

    return (
        <>
        <h1>{frontmatter.title}</h1>
            <h1>Este es otro titulo</h1>
        <div className='prueba'>
            <MDXRemote {...source} components={MDXComponents}/>

        </div>
        </>
    
    )
}

export const getStaticProps = async ({params}) => {
    const {slug} = params
    const { source, content, frontmatter } = await getFileBySlug(slug)
    
    return {
        props: {
            source, 
            frontmatter,
            content
        }
    }
}

export const getStaticPaths = async () => {
    const posts = await getFiles() 
    console.log({posts})
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

export default Post