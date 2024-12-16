"use client"
import { Data as Book, BooksResponse } from '@/functions/functions'
import BookDetailLoading from '@/src/components/BookDetailLoading'
import Comments from '@/src/components/Comments'
import React, { useEffect, useState } from 'react'

type BookDetailProps = {
  params: { bookId: string}
}


const BookDetail = ({params}: BookDetailProps) => {
  const { bookId } = params
  console.log(bookId);
  const [detail, setDetail] = useState<Book | null>(null) 
  const [status, setStatus] = useState({
    isLoading: false,
    isError: false,
    isSuccess: false 
  })

  const getBookDetail = async(id:string) => {
    try {
      setStatus((prev) => ({
        ...prev,
        isLoading: true
      }))
      const res = await fetch(`http://localhost:3000/api/books/${id}`)
      const data:Book = await res.json()
      console.log(data);
      setDetail(data)
      setStatus((prev) => ({
        ...prev,
        isLoading: false,
        isSuccess: true,
        isError: false
      }))
    } catch (error) {
      console.error("book detail fetching error: ",error);
      setStatus((prev) => ({
        ...prev,
        isError: true,
        isLoading: false
      }))
    }
  }

  useEffect(() => {
   getBookDetail(bookId)
  }, [bookId])
     
console.log(detail);
if(status.isLoading){
  return <div><BookDetailLoading/></div>
}
if(status.isError){
  return <div>Sorry something went wrong!...</div>
}
  return (
    <section className='flex items-start justify-center h-full p-5'>
      <div className='flex flex-col items-center justify-center gap-5'>
        <h3>
         {detail?.name}
        </h3>
        <div className=''>
          <img src={detail?.image} alt="book image" width={350} height={350} />
        </div>
        <p className=''>
          {detail?.description}
        </p>
        <div>
          <small>{detail?.author}</small>
         
        </div>
        <Comments comments={detail?.comments || []}/>
      </div>
    </section>
  )
}

export default BookDetail