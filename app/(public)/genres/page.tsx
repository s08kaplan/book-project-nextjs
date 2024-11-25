import { fetchBooks } from '@/functions/functions'
import React from 'react'
import ClientGenres from './ClientGenres';

const Genres = async () => {
  const data = await fetchBooks()
  console.log(data);
  return <ClientGenres data={data}/>
}

export default Genres