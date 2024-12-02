"use client";
import React, { useState } from "react";
import { Comment } from "@/functions/functions";
import { useParams } from "next/navigation";


type CommentsProps = {
  comments: Comment[];
};

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");

  const {bookId} = useParams()
  console.log(bookId);

  const message = comments?.length > 0 ? "Show Comments" : "Add first comment";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setContent(e.target.value)
  };

 
  return (
    <section>
      <button
        onClick={() => setShow((prev) => !prev)}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-2 absolute left-0"
      >
        {message}
      </button>
      <div>
        {show &&
          comments?.map((comment) => (
            <div key={comment._id}>{comment.content}</div>
          ))}
      </div>
      {show && (
        <div className="flex gap-2">
          <input
            type="text"
            name="content"
            onChange={handleChange}
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
          />
          <button>Send</button>
        </div>
      )}
    </section>
  );
};

export default Comments;
