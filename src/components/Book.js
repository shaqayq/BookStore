import React from 'react';

const Book = (props) => {
  const { title, author } = props;
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
        <button type="button">Remove</button>
      </section>
    </>
  );
};

export default Book;
