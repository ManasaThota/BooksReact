import React, { useContext, useState } from 'react'
import BooksContext from '../context/books';

const BookEdit = ({book, onSubmit}) => {
  const { editBookById }  = useContext(BooksContext);

  const[title, setTitle] = useState(book.title);
  const handleChange = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  }
  return (
    <form className='book-edit' onSubmit={handleSubmit}>
      <label>Title</label>
      <input className='input' value={title} onChange={handleChange} />
      <button className='button is-primary'>Save</button>
    </form>
  )
}

export default BookEdit