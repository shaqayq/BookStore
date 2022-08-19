/* eslint-disable camelcase */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const { item_id, title, author } = book;

  const removeItem = (e) => {
    e.preventDefault();
    dispatch(deleteBook(item_id));
  };

  return (
    <>
      <section className="book">
        <h3>
          Book Title:
          {title}

        </h3>
        <h4>
          Authore:
          {author}
        </h4>
        <button type="button" onClick={removeItem}>Remove</button>
      </section>
    </>

  );
};

export default Book;
