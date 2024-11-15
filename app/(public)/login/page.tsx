import AuthForm from '@/src/components/AuthForm'
import React from 'react'

const Login = () => {
  return (
    <section>
      <AuthForm formType="Login" buttonText="Login"/>
    </section>
  )
}

export default Login