import React from 'react'


const BookDetail = ({params}: {params: {bookId:string}}) => {
  const { bookId } = params
  console.log(bookId);
  return (
    <section>
      <div>
        <h3>
          
        </h3>
      </div>
    </section>
  )
}

export default BookDetail