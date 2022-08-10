import mongoose, { Schema, model, Model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: {
        values: ["user", "admin", "superadmin"],
        message: "{} no es un rol valido",
        default: "user",
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || model("User", userSchema);
export default User;
