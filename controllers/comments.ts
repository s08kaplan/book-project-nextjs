import Comment from "@/models/comment";
import Book from "@/models/book";
import { NextResponse } from "next/server";

export const getComments = async (req: Request): Promise<NextResponse> => {
  try {
    const comments = await Comment.find();
    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: true, message: "Failed to fetch comments" },
      { status: 500 }
    );
  }
};

export const getSingleComment= async (commentId: string): Promise<NextResponse> => {
  try {
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return NextResponse.json(
        { error: true, message: "Comment not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(comment, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: true, message: "Failed to fetch comments" },
      { status: 500 }
    );
  }
};

export const createComment = async (req: Request): Promise<NextResponse> => {
  try {
    const body = await req.json();
    const { bookId, userId, content } = body

    if (!bookId || !userId || !content) {
      return NextResponse.json({ message: "Missing required fields" });
    }

     const newComment = new Comment({
      userId,
      bookId,
      content,
    });
    await newComment.save();

    await Book.findByIdAndUpdate(
      bookId,
      {$push: { comments: newComment._id}},
      { new: true}
    )
    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: true, message: "Failed to create new comment" },
      { status: 500 }
    );
  }
};

export const deleteComment = async (commentId: string): Promise<NextResponse> => {
  try {
    const comment = await Comment.findByIdAndDelete(commentId);
    if (!comment) {
      return NextResponse.json(
        { error: true, message: "Comment not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { error: false, message: "Selected comment deleted successfully" },
      { status: 204 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: true, message: "Failed to fetch comments" },
      { status: 500 }
    );
  }
};

