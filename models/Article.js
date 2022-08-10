import mongoose, { Schema, model, Model } from "mongoose";

const ArticleSchema = new Schema(
  {
    title: { type: String, required: true },
    img: { type: String, required: true },
    category: {
      type: String,
      enum: {
        values: [
          "series",
          "cine",
          "videojuegos",
          "juegos de mesa",
          "podcast",
          "web",
        ],
        message: "{VALUE} no es una categoria valida",
      },
    },
    author: { type: String, required: true },
    twitterAuthor: { type: String, required: true },
    imgAlt: { type: String, required: true },
    description: { type: String, required: true },
    id: { type: String, required: true },
    url: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.models.Article || model("Article", articleSchema);
export default Article;
