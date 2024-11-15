"use strict"

const bcrypt = require("bcrypt")
const saltRounds = 10;

//* password conditions and Encrypt
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,20}$/

const passwordEncrypt = (password) => {
    if(passwordRegex.test(password)){
       bcrypt.hash(password, saltRounds, function(err, hash) {
        return hash
    });
    } else {
        throw new Error("Please provide the credentials for your password")
    }
}


//* Checking Email conditions 
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const emailValidate = (email) => {
    if(emailRegex.test(email)) {
        return email
    }
    throw new Error("Please check your email")
}

module.exports = {
     emailValidate, passwordEncrypt
}