type Data={
    _id: string,
    name:string,
    author:string,
    genres:string,
    rating:[],
    comments:[],
    image:string,
    summary: string
  }

  export type BooksResponse = Data[];

export const fetchBooks = async (): Promise<BooksResponse> => {
    try {
      const res = await fetch("http://localhost:3000/api/books")
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