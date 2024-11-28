import React from 'react'
import { fetchBooks } from "@/functions/functions"
import ClientBooks from './ClientBooks'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Books",
  description: "Different genres of books you can find with summaries",
};


const Books = async () => {
 const data = await fetchBooks()
  return (
    <ClientBooks data={data}/>
  )
}

export default Books