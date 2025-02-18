"use client"
import React, { useState } from 'react'

const ClientAuthor = () => {
  const [author, setAuthor] = useState("")
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setAuthor(e.target.value)
  }
  return (
    <section>
    <main>
      <h3>Please enter the author name to see his/her books</h3>
      <div className='flex items-center gap-3'>
        <label htmlFor="author">Author name: </label>
        <input type="text" name='author' onChange={handleChange}  className='block w-60 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6' />
      </div>
    </main>
  </section>
  )
}

export default ClientAuthor