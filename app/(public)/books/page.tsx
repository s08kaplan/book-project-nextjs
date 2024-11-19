import React from 'react'
import { fetchBooks } from "@/functions/functions"
import ClientBooks from './ClientBooks'


const Books = async () => {
 const data = await fetchBooks()
  return (
    <ClientBooks data={data}/>
  )
}

export default Books