import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { getBooks } from '../redux/books/books';

const Home = () => {
  const lists = useSelector((state) => state.books) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <>
      <div className="bookList">
        <h1>Book Lists</h1>
        {lists.map((item) => (
          <Book book={item} key={item.id} />
        ))}
      </div>
      <Form />
    </>
  );
};

export default Home;
