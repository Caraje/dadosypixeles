import React from "react";

const Video = ({ episode }) => {
  return (
    <div className="component_article">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${episode}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
