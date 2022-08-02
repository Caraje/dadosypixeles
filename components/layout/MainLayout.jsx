import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'

const MainLayout = ({children, title, url, img, description, author, tags}) => {
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
                <meta name="keywords" content="HTML, CSS, JavaScript"/>
                <title>{title}</title>
                <meta name="description" content={description}/>

                {/* Facebook Meta Tags */}
                <meta property="og:url" content={url}/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description}/>
                <meta property="og:image" content={img}/>

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content="www.dadosypixeles.es"/>
                <meta name="twitter:site" content="@DadosyPixeles" />
                <meta name="twitter:creator" content={author} />
                <meta property="twitter:url" content={url}/>
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={description}/>
                <meta name="twitter:image" content={img}/>

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