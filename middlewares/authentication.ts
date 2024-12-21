import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET_KEY

export function authMiddleware(request: NextRequest) {
    const authHeader = request.headers.get("Authorization")
  const token = authHeader?.split(" ")[1]

  if (!token) {
    
    return NextResponse.json({message:"Unauthorized person, please sign in"}, { status: 401 })
  }

  try {
    
    jwt.verify(token, SECRET_KEY);
    
    return NextResponse.next();
  } catch (error) {
    console.error('Token verification failed:', error);
    
    return NextResponse.json({message:"Invalid credentials"}, { status: 403 })
  }
}

export const config = {
  matcher: ['/api/comments', '/api/comments/:path*'], 
};
