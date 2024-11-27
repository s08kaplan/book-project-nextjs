import mongoose, { Document, Model, Schema } from "mongoose";

interface IComment extends Document {
    userId: mongoose.Types.ObjectId;
    bookId: mongoose.Types.ObjectId;
    content: string;
  }

const CommentSchema = new Schema<IComment>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref:"User",
      required: true
    },

    bookId: {
      type: Schema.Types.ObjectId,
      ref:"Book",
      required: true
    },

    content: {
      type: String,
      trim: true,
      required: true
    },

  },
  {
    collection: "comments",
    timestamps: true,
  }
);

const Comment = mongoose.models.Comment || mongoose.model<IComment>("Comment", CommentSchema);
export default Comment;
