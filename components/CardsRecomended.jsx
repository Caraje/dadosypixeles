import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const CardsRecomended = ({post}) => {
    const {title, date, url, article, author, tags, category, img, alt} = post;
    return (
        <div className='prueba'>

        <Link 
            className='' 
            href={`/${category.replace(/\s+/g, '').toLowerCase()}/${url}`} 
            passHref
            >
            <article className='cardRecomended'>
                <Image 
                    src={`https://res.cloudinary.com/www-dados-pixeles-com/image/upload/${img}`}
                    alt={alt} 
                    width={700} 
                    height={350} 
                    objectFit='cover'
                    />
                <div className='cardRecomended__infoGroup'>
                    <h3 className='cardRecomended__infoGroup__category'>
                        {category}
                    </h3>
                    <h2 className='cardRecomended__infoGroup__title'>
                        {title}
                    </h2>
                    <h4 className='cardRecomended__infoGroup__author'>
                        Escrito por: <span>{author}</span> 
                    </h4>
                </div>
            </article>
        </Link>
        </div>
    )
}

export default CardsRecomended