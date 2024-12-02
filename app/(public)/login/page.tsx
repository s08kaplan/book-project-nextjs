import React from 'react'
import AuthForm from '@/src/components/AuthForm'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Login",
  description: "User login page",
};


const Login = () => {
  return (
    <section>
      <AuthForm formType="Login" buttonText="Login"/>
    </section>
  )
}

export default Login