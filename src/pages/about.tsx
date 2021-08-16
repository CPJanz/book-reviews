import React from 'react'
import Book from "../components/Book"
import { books } from "../data/books" 

export default () => {
  return (
    <div>
      <p>React Static is a progressive static site generator for React.</p>
      {books.map((book, i) => <Book key={i} bookData={book} />)}
    </div>
  )
}
