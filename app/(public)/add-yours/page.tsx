"use client"
import React, { useState } from 'react'
import axios from 'axios'

const inputs = [
  { label:"Book Name", name:"name", id:"Book Name" },
  { label:"Author", name:"author", id:"Author" },
  { label:"Genre", name:"genres", id:"Genre" },
  { label:"Summary", name:"summary", id:"Summary" },
  { label:"Description", name:"description", id:"Description" },
  { label:"Cover Image", name:"image", id:"Cover Image" }
]

const AddYours = () => {
  
  const [values, setValues] = useState({
    name:"",
    author:"",
    genres:"",
    summary:"",
    description:"",
    image:"",
  })
  
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target
  setValues((prev) => ({
    ...prev,[name]:value
  }))
}

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  try {
    const data = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}books`,values)
    console.log(data);
  } catch (error) {
    console.error(error);
    
  }
}
  console.log(values);
  return (
    <section>
      <div className='flex flex-col items-center justify-center group'>
        <h3 className='cursor-pointer'>Add your Favorite books </h3>
        <small className='invisible group-hover:visible'>If it does not exist we will publish</small>
      </div>
      <main>
        <form onSubmit={handleSubmit}>
          {
           inputs.map(input => (
            <div key={input.name}>
              <div>
                <label htmlFor={input.id}>{input.label}</label>
              </div>
              <div>
                <input type="text" id={input.id} name={input.name} onChange={handleChange}  placeholder={`Enter ${input.label.toLowerCase()}...`} />
              </div>
            </div>
           )) 
          }
          <button>
            Add Book
          </button>
        </form>
      </main>
    </section>
  )
}

export default AddYours