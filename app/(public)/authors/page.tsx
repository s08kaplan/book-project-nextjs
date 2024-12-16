import React from 'react'
import { Metadata } from 'next';
import ClientAuthor from './ClientAuthor';

export const metadata: Metadata = {
  title: "Authors",
  description: "List of authors related the books",
};

const Authors = () => {
  
  return (
    <div>
       <ClientAuthor/>
    </div>
  )
}

export default Authors