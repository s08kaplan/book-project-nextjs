"use client";
import React, { useState } from "react";
import { Comment } from "@/functions/functions";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";


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


  const sendComment = async() => {
   const postComment = {
      bookId,
      userId:"6760870d2b24f0abcd4d7553",
      content
    }
    try {
      console.log(postComment);
      const data = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}comments`,postComment)
      console.log(data);
    } catch (error) {
      console.error("Comment not sent: ", error);
      
    }
  }
 
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
            <main key={comment._id}>
              <div>
                {comment.content}
              </div>
              <div>
                {/* <Image src={comment.userId?.image} alt="user image" width={50} height={50}/> */}
                <img src={comment.userId?.image} alt="user image" width={50} height={50} />
              </div>
              </main>
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
          <button onClick={sendComment}>Send</button>
        </div>
      )}
    </section>
  );
};

export default Comments;
