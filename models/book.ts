import mongoose, { Document, Model, Schema } from "mongoose";
interface IBook extends Document {
  name: string;
  author: string;
  genres: string;
  summary?: string;
  description?: string,
  rating: { userId: string; value: number }[];
  comments: string[];
  image?: string;
}

const BookSchema = new Schema<IBook>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      index: true,
    },

    author: {
      type: String,
      trim: true,
      required: true,
      index: true,
    },

    genres:{
      type: String,
      trim: true,
      required: true,
      index: true
    },

    summary: {
      type: String,
      trim: true,
      required: true
    },

    description: {
      type: String,
      trim: true,
      required: true
    },

    rating: [
      {
        userId: {type: Schema.Types.ObjectId,ref: "User"},
        value: { type: Number, min:1, max: 5}
      },
    ],
    comments: [
        {
          type:Schema.Types.ObjectId,
          ref:"Comment"
        }
    ],

    image: {
      type: String,
      trim: true,
      required: true
    },

  },
  {
    collection: "books",
    timestamps: true,
  }
);

const Book = mongoose.models.Book || mongoose.model<IBook>("Book", BookSchema);
export default Book;
