import React from 'react'

const Podcast = ({episode}) => {
    return (
        <div className='component_article'>
            <iframe 
                src={`https://open.spotify.com/embed/episode/${episode}?utm_source=generator`} 
                width="100%" 
                height="232" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            >                
            </iframe>
        </div>

    )
}

export default Podcast