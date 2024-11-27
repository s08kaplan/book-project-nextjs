import React from "react";
import { fetchBooks } from "@/functions/functions";
import ClientGenres from "./ClientGenres";
import Comments from "@/src/components/Comments";


const Genres = async () => {
  const data = await fetchBooks();
  console.log(data);
  return (
    <>
      <ClientGenres data={data} />
      <Comments comments={data.flatMap((book) => book.comments || [])} />
    </>
  );
};

export default Genres;
