import { dbConnection } from "@/lib/dbConnection";
import Book from "@/models/book";
import { NextResponse } from "next/server";

export const getBooks = async (req: Request): Promise<NextResponse> => {
  try {
    const books = await Book.find();
    return NextResponse.json(books, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: true, message: "Failed to fetch books" },
      { status: 500 }
    );
  }
};

export const getSingleBook = async (bookId: string): Promise<NextResponse> => {
  await dbConnection();
  try {
    const book = await Book.findById(bookId)
    // .populate({
    //   path: 'comments',
    //   select: 'content userId',
    //   populate: { path: 'userId', select: 'username image' },
    // }); 
    // .populate({path: 'comments', select: 'content' })
    // .populate({path: 'comments', populate:{path:"userId", select:"username image"} })
    // .populate({path: 'comments', select: 'bookId', populate:{ select:"name"} });
    // .populate({path: 'comments', select: 'content', populate:{path:"userId", select:"username image"} });
    // .populate<{ comments: { content: string; userId: { username: string; image: string } }[] }>("comments")
    // .exec();
   console.log("book from get single book func ====>>> ",book);
    if (!book) {
      return NextResponse.json(
        { error: true, message: "Book not found", bookId },
        { status: 404 }
      );
    }
    return NextResponse.json(book, { status: 200 });
  } catch (error) {
    console.error('Error during population or query:', error);
    
    return NextResponse.json(
      { error: true, message: "Failed to fetch books", details: error.message },
      { status: 500 }
    );
  }
};

export const createBook = async (req: Request): Promise<NextResponse> => {
  try {
    const body = await req.json();
    const newBook = new Book(body);
    await newBook.save();
    return NextResponse.json(newBook, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: true, message: "Failed to create new book" },
      { status: 500 }
    );
  }
};

export const deleteBook = async (bookId: string): Promise<NextResponse> => {
  try {
    const book = await Book.findByIdAndDelete(bookId);
    if (!book) {
      return NextResponse.json(
        { error: true, message: "Book not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { error: false, message: "Selected book deleted successfully" },
      { status: 204 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: true, message: "Failed to fetch books" },
      { status: 500 }
    );
  }
};

