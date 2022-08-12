import React from 'react';
import Book from './Book';
import Form from './Form';

const Home = () => (
  <>
    <div className="bookList">
      <h1>Book Lists</h1>
      <Book title="hello" author="Sara samuel" />
    </div>
    <Form />
  </>
);

export default Home;
