import ImageSlider from "@/src/components/slider/ImageSlider";
import Image from "next/image";


const books = [
  { id: 1, src: "https://cdn.pixabay.com/photo/2014/08/08/21/03/bookshelf-413705_640.jpg", alt: "Book 1" },
  { id: 2, src: "https://cdn.pixabay.com/photo/2020/05/16/16/43/book-5178205_640.jpg", alt: "Book 2" },
  { id: 3, src: "https://cdn.pixabay.com/photo/2024/06/16/16/16/book-8833738_640.jpg", alt: "Book 3" },
  { id: 4, src: "https://cdn.pixabay.com/photo/2018/01/04/09/39/love-story-3060241_640.jpg", alt: "Book 4" },
];

export default function Home() {
  return (
    // <main className="text-red-600  h-dvh bg-no-repeat w-svw bg-center bg-cover bg-[rgba(255,255,255,0.1)] bg-[url('https://cdn.pixabay.com/photo/2021/01/21/16/49/books-5937823_640.jpg')]">
    //   Book Project started!
    //   <Image src="https://cdn.pixabay.com/photo/2020/05/16/16/43/book-5178205_640.jpg" alt="book image" width={350} height={350} />
    // </main>

    <main className="relative h-screen overflow-hidden bg-gray-900 w-dvw">
    {/* Animated Books */}
    {/* <div className="absolute flex flex-col items-center justify-center w-full h-full"> */}
    {/* <div className="absolute h-full w-[900px]">
      {books.map((book, index) => (
        <div
          key={book.id}
          // className={`absolute animate-slide hover:!animation-none hover:scale-150 hover:z-50`}
          // className="absolute animate-slide hover:!animation-none hover:scale-150 hover:z-50"
          className="book-image"
          style={{
            animationDelay: `${index * 2}s`,
            top: `${10 + index * 20}%`,
          }}
        >
          <img
            src={book.src}
            alt={book.alt}
            // className="object-cover w-32 h-48 transition-transform duration-500 ease-in-out rounded shadow-md"
            // className="object-cover w-32 h-48 transition-transform duration-500 ease-in-out rounded shadow-md"
            className="object-cover w-32 h-48 rounded shadow-md"
          />
        </div>
      ))}
    </div> */}
    {/* Background and Title */}
    <div className="absolute inset-0 flex items-center justify-center">
      {/* <h1 className="p-4 text-4xl font-bold text-white bg-black bg-opacity-50 rounded-md"> */}
      <h1 className="p-4 text-4xl font-bold text-white bg-black bg-opacity-50 rounded-md">
        Life is beautiful with Books!
      </h1>
    </div>
    <ImageSlider images={books} />
  </main>
  );
}
