import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "@/models/user";

const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string;

if (!SECRET_KEY) {
    throw new Error("JWT secret key is not defined in the environment variables.");
  }

export async function login(data: {username: string, password: string}) {
  try {
    const { username, password } = data;
    if (!(username && password)) {
      return NextResponse.json(
        { message: "Please enter your username and password" },
        { status: 400 }
      );
    }
    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json(
        { message: "There is no such a user" },
        { status: 401 }
      );
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword)
      return NextResponse.json(
        { message: "Password is invalid" },
        { status: 401 }
      );
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        username: user.username,
        image: user.image,
        gender: user.gender,
      },
      SECRET_KEY,
      { expiresIn: "1h" }
    );
    const response = NextResponse.json({ message: "Login successful", token });
    response.cookies.set("authToken", token, { httpOnly: true, path: "/" });
    return response;
  } catch (error) {
    console.error("Login error: ", error);
    return NextResponse.json({ message: "An error occurred: ", error });
  }
}
