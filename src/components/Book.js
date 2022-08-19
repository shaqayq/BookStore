/* eslint-disable camelcase */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';
import '../style/home.css';

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
        <div className="bookDetail">
          <span className="School-of">
            Action
          </span>
          <span className="Title">
            {title}
          </span>

          <span className="Suzanne-Collins">
            {author}
          </span>

          <ul className="details">
            <li>
              <span className="Comments">
                Comments
              </span>
            </li>
            <li>| </li>
            <li>
              <span className="Remove">
                Remove
              </span>
            </li>
            <li>| </li>
            <li>
              <span className="Edit">
                Edit
              </span>
            </li>
          </ul>
        </div>
        <div className="precentag">
          <div className="Rectangle-3" />
          <span className="-Percent-Complete">
            {Math.floor(Math.random() * 100)}
            %
          </span>
          <span className="Completed Text-Style-2">
            Completed
          </span>
        </div>
        <div className="bookState">
          <h4 className="Current-Chapter">
            Current Chapter
          </h4>

          <span className="Current-Lesson Text-Style-4">
            Chapter
            {' '}
            {Math.floor(Math.random() * 10)}
          </span>
          <button type="button" onClick={removeItem} className="check">Remove</button>
        </div>
      </section>
    </>

  );
};

export default Book;
