"use client"
import React, { useState } from 'react'
import { Comment } from '@/functions/functions'

type CommentsProps = {
    comments: Comment[]
}

const Comments: React.FC<CommentsProps> = ({comments}) => {
    const [show, setShow] = useState(false)
    const message = comments?.length > 0 ? "Show Comments" : "Add the first comment"
  return (
    <section>
        <button onClick={()=>setShow(prev => !prev)}  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-2 absolute left-0">{message}</button>
      <div>
        {show && comments?.map(comment => (
            <div key={comment._id}>{comment.content}</div>
        ))}
      </div>
    </section>
  )
}

export default Comments