import React, { useState } from 'react';
import '../style/form.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [book, addNewBook] = useState();

  const dispatch = useDispatch();

  const newItem = (e) => {
    addNewBook((book) => ({
      ...book, [e.target.name]: e.target.value,
    }));
  };

  const getBook = () => {
    const newBook = {
      id: uuidv4(),
      name: book.name,
      author: book.author,
    };

    return dispatch(addBook(newBook));
  };

  return (
    <>
      <form>
        <label htmlFor="title">Title: </label>
        <input name="name" type="text" placeholder="Enter book title" id="title" onChange={newItem} />

        <label htmlFor="authore">Authore</label>
        <input name="author" type="text" placeholder="Enter book author name" id="authore" onChange={newItem} />

        <button type="button" onClick={getBook}>Add Book</button>
      </form>
    </>
  );
};

export default Form;
