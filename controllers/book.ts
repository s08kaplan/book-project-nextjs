import Book from "@/models/book"
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