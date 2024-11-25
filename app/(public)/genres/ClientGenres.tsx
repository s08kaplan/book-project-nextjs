"use client";
import React, { useState } from "react";
import { ClientBooksProps } from "../books/ClientBooks";
import BooksByGenre from "@/src/components/BooksByGenre";

const popularBookGenres = new Set([
  "Crime Fiction",
  "Fantasy",
  "Science Fiction",
  "Mystery",
  "Thriller/Suspense",
  "Romance",
  "Historical Fiction",
  "Horror",
  "Adventure",
  "Dystopian",
  "Young Adult (YA)",
  "Contemporary Fiction",
  "Literary Fiction",
  "Biography/Autobiography",
  "Memoir",
  "Self-Help/Personal Development",
  "Travel",
  "History",
  "True Crime",
  "Science/Technology",
  "Philosophy",
  "Religion/Spirituality",
  "Health/Fitness",
  "Business/Economics",
  "Education/Reference",
  "Historical Romance",
  "Fantasy Romance",
  "Science Fiction Thriller",
  "Paranormal Romance",
  "Crime Thriller",
  "Detective Fiction",
  "Urban Fantasy",
  "Epic/High Fantasy",
  "Cyberpunk",
  "Post-Apocalyptic",
  "Gothic Fiction",
  "Magical Realism",
  "Psychological Thriller",
  "Western",
  "Chick Lit",
  "Afrofuturism",
  "Asian Mythology",
]);

const ClientGenres: React.FC<ClientBooksProps> = ({ data }) => {
  //   console.log(data);
  const [booksByGenre, setBooksByGenre] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const genres = data?.map((item) => item.genres.toLowerCase()) || [];
  //   console.log(genres);

  const handleGenre = (e: React.MouseEvent<HTMLButtonElement>) => {
    const textContent = e.currentTarget.textContent?.toLowerCase();

    if (textContent && genres.length > 0) {
      const filteredBooks = genres.filter((genre) =>
        genre.includes(textContent)
      );
      if (filteredBooks.length > 0) {
        setBooksByGenre(filteredBooks);
        setOpen(true);
      }
    }
  };

  console.log("open: ", open);
  return (
    <section>
      <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {[...popularBookGenres].map((genre, index) => (
          <button
            key={index}
            onClick={handleGenre}
            className="transition-all ease-linear cursor-pointer hover:text-gray-700"
          >
            {genre}
          </button>
        ))}
      </div>
      {open && <BooksByGenre books={booksByGenre} />}
    </section>
  );
};

export default ClientGenres;
