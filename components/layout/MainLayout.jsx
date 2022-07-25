import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'
import FooterPage from './FooterPage'

const MainLayout = ({children, title, url, img, description, author}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='og:url' content={url} />
                <meta name='og:title' content={title} />
                <meta name='og:image' content={img} />
                <meta name='og:description' content={description} />
                <meta name="twitter:card" content="summary" />
                <meta name='twitter:creator' content={author} />
                <link rel="icon" href="/img_static/favicon.ico" />
            </Head>     

            <header className='' >
                <Navbar />

            </header>
            <main>
                {children}
            </main>

        </>
)
}

export default MainLayout