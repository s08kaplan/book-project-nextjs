import axios from "axios";

export type Comment = {
  _id: string,
  userId: {_id:string, image: string, username: string},
  bookId: string,
  content: string,
  createdAt: string,
  updatedAt: string
}
export type Data={
    _id: string,
    name: string,
    author :string,
    genres: string,
    rating: [],
    comments: Comment[],
    image:string,
    summary: string,
    description: string
  }

  export type BooksResponse = Data[];

export const fetchBooks = async (): Promise<BooksResponse> => {
    try {
      const res = await fetch("http://localhost:3000/api/books", {next: { revalidate: 60 }})
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
  
      const data: BooksResponse = await res.json()
      console.log(data);
      return data
    } catch (error) {
      console.error("Books not fetched", error);
      return []
    }
  }

  export type PostDataProps = {
    userId: string,
    bookId: string,
    content: string
  }

  export const addComment = async (postData:PostDataProps) => {
    try {
      const data = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}comments`,postData)
      console.log(data);
    } catch (error) {
      console.error("Comment not added", error);
      
    }
  }

  export const getBookByAuthor = async (name:string): Promise<BooksResponse> => {
    try {
      const res = await fetch(`http://localhost:3000/api/books?filter[author]=${name}`,{ cache: 'force-cache'})
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
  
      const data: BooksResponse = await res.json()
      console.log(data);
      return data
    } catch (error) {
      console.error("Books not fetched", error);
      return []
    }
  }