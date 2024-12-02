import React from 'react'
import AuthForm from '@/src/components/AuthForm'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Register",
  description: "User registration page",
};

const Register = () => {
  return (
    <section className='flex flex-col items-center justify-center min-h-dvh'>
      <AuthForm formType="Register" buttonText="Register"/>
    </section>
  )
}

export default Register