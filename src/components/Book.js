import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const { id, name, author } = book;

  const removeItem = (e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };

  return (
    <>
      <section className="book">
        <h3>
          Book Title:
          {name}

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
