import React, { useState } from 'react';
import '../style/form.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/books';

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
      item_id: uuidv4(),
      title: book.name,
      author: book.author,
      category: 'holly',
    };

    return dispatch(postBook(newBook));
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
