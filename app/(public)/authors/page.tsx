import React from 'react'
import { Metadata } from 'next';
import ClientAuthor from './ClientAuthor';

export const metadata: Metadata = {
  title: "Authors",
  description: "List of authors related the books",
};
const deneme = async () => {
  try {
     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}books?filter[author]=Alex`)
  const data = await res.json()
  return data
  } catch (error) {
    console.error("author book not fetched: ", error); 
  }
 
}
const Authors = async () => {
 const data = await deneme()
 console.log(data);
  return (
    <div>
       <ClientAuthor/>
    </div>
  )
}

export default Authors