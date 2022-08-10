import React from "react";
import CardArticle from "../ComponentsPage/CardArticle";

const IndexComponent = ({ posts, category }) => {
  return (
    <div className="container category__page">
      <main className="category__page__news">
        <div className="category__page__news__content">
          <h1 className="category__page__news__content__title">{category}</h1>
          <div className="category__page__news__content__void"></div>
        </div>

        {posts.length > 0 ? (
          posts.map((post, id) => <CardArticle key={id} post={post} />)
        ) : (
          <h2 className="category__page__empty">
            No hay articulos disponibles
          </h2>
        )}
      </main>
    </div>
  );
};

export default IndexComponent;
