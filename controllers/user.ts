import User from "@/models/user"
import { NextResponse } from "next/server";

export const getUsers = async (req: Request): Promise<NextResponse> => {
  try {
    const users = await User.find()
    return NextResponse.json(users, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: true, message: "Failed to fetch users" },
      { status: 500 })
  }
}

export const createUser = async (req: Request): Promise<NextResponse> => {
  
  try {
    const newUser   = new User(req.body)
    await newUser.save()
    return NextResponse.json(newUser, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      {error:true,message:"Failed to create new user"},
      { status: 500 }
    )
  }
}