import React from 'react'
import { book, bookType, rating } from "../data/books"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Comment = styled.div`
  display: flex;
  flex-direction: column;
`

type BookProps = {
  bookData: book
}

const Book = ({bookData}: BookProps) => {
  const {title, author, publishDate, type, comment, review, dateRead, olid} = bookData
  return (
    <Wrapper>
      <div><img src={`http://covers.openlibrary.org/b/olid/${olid}-M.jpg`} alt="" /></div>
      <div>{title}</div>
      <div>{author.join(" & ")}</div>
      <div>{publishDate.toDateString()}</div>
      <div>{bookType[type]}</div>
      <Comment>
        <div>{comment}</div>
        <div>{rating[review]}</div>
      </Comment>
      <div>{dateRead.toDateString()}</div>
    </Wrapper>
  )
}
export default Book
