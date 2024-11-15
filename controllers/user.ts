import { NextApiRequest, NextApiResponse } from "next";
import User from "@/models/user"

export const getUsers = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(500).json({error:true,message:"Failed to fetch users"})
  }
}

export const createUser = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  
  try {
    const newUser   = new User(req.body)
    await newUser.save()
    return res.status(201).json(newUser)
  } catch (error) {
    return res.status(500).json({error:true,message:"Failed to create new user"})
  }
}