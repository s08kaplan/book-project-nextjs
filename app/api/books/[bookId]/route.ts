import { NextResponse } from 'next/server';
import { deleteBook, getSingleBook } from '@/controllers/book'; 

export async function GET(req: Request, { params }: { params: { bookId: string } }) {
    const { bookId } = params
  try {
    return await getSingleBook(bookId); 
  } catch (error) {
    return NextResponse.json(
      { error: true, message: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request, { params }: { params: { bookId: string } }) {
    const { bookId } = params
  try {
    return await deleteBook(bookId); 
  } catch (error) {
    return NextResponse.json(
      { error: true, message: (error as Error).message },
      { status: 500 }
    );
  }
}