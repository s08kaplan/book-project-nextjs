import React from 'react'

interface BooksByGenreProps {
    books: string[]
}

const BooksByGenre: React.FC<BooksByGenreProps> = ({books}) => {
    if (!books.length) {
        return <p>No books available for this genre.</p>;
      }
  return (
    <div className="p-5">
      <h2 className="text-lg font-bold">Books in this Genre:</h2>
      <ul className="list-disc list-inside">
        {books.map((book, index) => (
          <li key={index} className="py-1">
            {book}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BooksByGenre