import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const CardArticle = ({post}) => {

    const {title, date, url, article, author, tags, category, img, alt} = post;
    return (
        <Link className='home__card' href={`/${category.replace(/\s+/g, '').toLowerCase()}/${url}`} passHref>
            <article className='home__page__news__card'>
                <Link href={`/${category.replace(/\s+/g, '').toLowerCase()}/${url}`} passHref>
                    <div className='home__page__news__card__content'>
                        <Image 
                            src={`https://res.cloudinary.com/www-dados-pixeles-com/image/upload/${img}`}
                            alt={alt} 
                            objectFit='cover'
                            layout="fill"
                            className='home__page__news__card__img'
                        />
                    </div>
                </Link>

                <div className='home__page__news__card__info'>
                    <h3>{category.toUpperCase()}</h3>
                    <h2>{title}</h2>
                    <h4>Escrito por: <span>{author}</span> </h4>
                </div>
            </article>
        </Link>
    )
}

export default CardArticle