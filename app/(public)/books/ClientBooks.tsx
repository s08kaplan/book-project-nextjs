"use client"
import React from 'react'
import { BooksResponse } from '@/functions/functions';
import { useRouter } from 'next/navigation';

type ClientBooksProps = {
    data: BooksResponse; 
  };

const ClientBooks: React.FC<ClientBooksProps> = ({data}) => {
  const router = useRouter()
    console.log(data);
  return (
    <section>
        <div className='grid grid-cols-1 gap-3 p-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
           { data?.map(({_id,author,comments,genres, image, name, rating, summary})=> (
            <div key={_id}>
            <h3 className=''>{name}</h3>
             <div onClick={()=> router.push(`/books/${_id}`)}>
                <img src={image} alt="book image" width={150} height={150} className='hover:cursor-pointer' />
             </div>
             <p>{summary}</p>
             <div className='flex items-center justify-between '>
                <small>{author}</small>
                <small>{rating}</small>
             </div>
            </div>
           ))}
        </div>
    </section>
  )
}

export default ClientBooks