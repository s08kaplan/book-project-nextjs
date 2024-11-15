import AuthForm from '@/src/components/AuthForm'
import React from 'react'

const Register = () => {
  return (
    <section className='flex flex-col items-center justify-center min-h-dvh'>
      <AuthForm formType="Register" buttonText="Register"/>
    </section>
  )
}

export default Register