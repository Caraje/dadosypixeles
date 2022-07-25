import React from 'react'
import CardsRecomended from './CardsRecomended';

export const RecomendedCardsContainer = ({posts}) => {
    const newPost = posts.sort(((a, b ) => b.id - a.id))

    return (
        <div>
            <div className='home__page__highlight__content'>
                <h3 className='home__page__highlight__content__title '>Recomendados:</h3>
                <div className='home__page__highlight__content__void'></div>
            </div>

                {
                    newPost.slice(0, 4).map( (post, id) => (<CardsRecomended key={id} post={post}/>))
                }

        </div>
    )
}
