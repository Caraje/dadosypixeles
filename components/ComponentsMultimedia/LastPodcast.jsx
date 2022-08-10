import React from "react";

const LastPodcast = ({ episode }) => {
  return (
    <>
      <div className="home__page__highlight__content">
        <h3 className="home__page__highlight__content__title">
          Último Podcats:
        </h3>
        <div className="home__page__highlight__content__void"></div>
      </div>
      <iframe
        src={`https://open.spotify.com/embed/episode/${episode}?utm_source=generator`}
        frameBorder="0"
        // allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        className="home__page__highlight__content__iframe__podcast"
      ></iframe>
    </>
  );
};

export default LastPodcast;
