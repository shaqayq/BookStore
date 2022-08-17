import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Home = () => {
  const lists = useSelector((state) => state.books);
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
