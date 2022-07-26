import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import IndexComponent from "../../components/PageStructure/IndexComponent";
import { getAllFilesMetadata } from "../../lib/mdx";
const SEO = {
  title: "Bienvenidos a Dados&pixeles",
  description:
    "Bienvenidos a Dados y pixeles, una web dedicada a hablar de series, peliculas, videojuegos o juegos de mesa, un lugar donde compartir nuestros hobbies y nuestras aficiones",
  img: "/img_static/Logo_vertical.webp",
  url: "https://www.dados&pixeles.com",
  author: "@DadosyPixeles",
  tags: "Dados y pixeles, videojuegos, juegos de mesa, series, television, cine, peliculas, friki",
};

const JuegosMesaPage = ({ posts }) => {
  const categoryPosts = posts.filter(
    (post) => post.category.replace(/\s+/g, "").toLowerCase() === "cine"
  );
  const category = "Cine";
  return (
    <MainLayout
      title={SEO.title}
      url={SEO.url}
      img={SEO.img}
      description={SEO.description}
      author={SEO.author}
      tags={SEO.tags}
    >
      <IndexComponent posts={categoryPosts} category={category} />
    </MainLayout>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  return {
    props: { posts },
  };
}

export default JuegosMesaPage;
