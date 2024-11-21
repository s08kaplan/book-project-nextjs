"use client"
import { Data as Book, BooksResponse } from '@/functions/functions'
import React, { useEffect, useState } from 'react'

type BookDetailProps = {
  params: { bookId: string}
}


const BookDetail = ({params}: BookDetailProps) => {
  const { bookId } = params
  console.log(bookId);
  const [detail, setDetail] = useState<Book | null>(null) 

  const getBookDetail = async(id:string) => {
    try {
      const res = await fetch(`http://localhost:3000/api/books/${id}`)
      const data:Book = await res.json()
      console.log(data);
      setDetail(data)
    } catch (error) {
      console.error(error);
      
    }
  }

  useEffect(() => {
   getBookDetail(bookId)
  }, [bookId])
     
console.log(detail);
  return (
    <section className='flex justify-center items-start p-2 h-full'>
      <div className='flex flex-col gap-5'>
        <h3>
         {detail?.name}
        </h3>
        <div>
          <img src={detail?.image} alt="book image" width={350} height={350} />
        </div>
        <p>
          {detail?.description}
        </p>
        <div>
          <small>{detail?.author}</small>
         
        </div>
      </div>
    </section>
  )
}

export default BookDetail