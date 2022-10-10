import Image from "next/image";
import Link from "next/link";
import React from "react";
import MDXComponents from "../componentsArticles/MDXComponents";
import LastPodcast from "../ComponentsMultimedia/LastPodcast";
import LastVideo from "../ComponentsMultimedia/LastVideo";
import { RecomendedCardsContainer } from "../ComponentsPage/RecomendedCardsContainer";
import SocialNetworks from "../ComponentsPage/SocialNetworks";
import { MDXRemote } from "next-mdx-remote";

const SlugComponent = ({ frontmatter, source, posts }) => {
  const { title, date, author, category, img, alt } = frontmatter;
  return (
    <div className='container articlePage'>
      <main className='articlePage__article'>
        <div className='articlePage__article__imgGroup'>
          <Image
            src={`https://res.cloudinary.com/www-dados-pixeles-com/image/upload/${img}`}
            alt={alt}
            width={900}
            height={400}
            objectFit='cover'
            layout='responsive'
            className='articlePage__article__imgGroup__img'
          />
          <div className='articlePage__article__imgGroup__void'></div>
          <h1 className='articlePage__article__imgGroup__title'>{title}</h1>
        </div>
        <div className='articlePage__article__infoGroup'>
          <div className='articlePage__article__infoGroup__category'>
            <h2>
              <Link
                href={`/${category.replace(/\s+/g, '').toLowerCase()}`}
                passHref
              >
                <a>{category.toUpperCase()}</a>
              </Link>
            </h2>
            <div className='articlePage__article__infoGroup__category__void'></div>
          </div>
          <div className='articlePage__article__infoGroup__info'>
            <h3>
              Escrito por: <span>{author}</span>
            </h3>
            <h3>
              Fecha: <span>{date}</span>
            </h3>
          </div>
          <div className='articlePage__article__text'>
            <MDXRemote {...source} components={MDXComponents} />
          </div>
        </div>
      </main>
      <section className='home__page__highlight'>
        <SocialNetworks />
        <RecomendedCardsContainer posts={posts} />
        <LastPodcast episode='522JZ9jCl02YnEmdFHp892' />
        <LastVideo videoID='tFfzImqds1Y' />
      </section>
    </div>
  )
};

export default SlugComponent;
