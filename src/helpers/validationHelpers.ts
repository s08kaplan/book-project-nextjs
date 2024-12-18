"use strict"
import bcrypt from "bcrypt"
export const saltRounds = 10;

//* password conditions and Encrypt
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,20}$/

export const passwordEncrypt = async (password:string) => {
    if(passwordRegex.test(password)){
        return await bcrypt.hash(password, saltRounds);
    } else {
        throw new Error("Please provide the credentials for your password")
    }
}


//* Checking Email conditions 
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
export const emailValidate = (email:string) => {
    if(emailRegex.test(email)) {
        return email
    }
    throw new Error("Please check your email")
}

