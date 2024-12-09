import { NextResponse } from 'next/server';
import { createComment, deleteComment, getSingleComment } from '@/controllers/comments';

export async function GET(req: Request, { params }: { params: { commentId: string } }) {
    const { commentId } = params
  try {
    return await getSingleComment(commentId); 
  } catch (error) {
    return NextResponse.json(
      { error: true, message: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request, { params }: { params: { commentId: string } }) {
    const { commentId } = params
  try {
    return await deleteComment(commentId); 
  } catch (error) {
    return NextResponse.json(
      { error: true, message: (error as Error).message },
      { status: 500 }
    );
  }
}