/* eslint-disable camelcase */
import React from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { deleteBook } from '../redux/books/books';
import '../style/progressStyle.css';
import '../style/book.css';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const { item_id, title, author } = book;

  const removeItem = (e) => {
    e.preventDefault();
    dispatch(deleteBook(item_id));
  };

  const number = Math.floor(Math.random() * 100);

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

        <div className="ChartPrecntage">
          <div className="chart">
            <CircularProgressbar value={number} />
          </div>
          <div className="precentag">
            <div className="Rectangle-3" />
            <h6 className="-Percent-Complete">
              {number}
              %
            </h6>
            <span className="Completed Text-Style-2">
              Completed
            </span>
          </div>
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
