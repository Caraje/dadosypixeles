import React from 'react'

const LastVideo = ({videoID}) => {
    return (
        <>
            <div className='home__page__highlight__content'>
                <h3 className='home__page__highlight__content__title'>Último Video:</h3>
                <div className='home__page__highlight__content__void'></div>
            </div>
            <div className='pruebavideo'>
                <iframe 
                    src={`https://www.youtube.com/embed/${videoID}`} 
                    width='100%'
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className='home__page__highlight__content__iframe__video'
                    >
                </iframe>
            </div>
        </>
    )
}

export default LastVideo