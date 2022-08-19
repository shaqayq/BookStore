import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const FETCH_NEW_BOOK = 'FETCHN_NEW_BOOK';
const BaseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QC3RyAO3NZdnVlTphJlA/books';

const books = [];

export const addBook = (data) => ({
  type: ADD_BOOK,
  data,
});

// export const removeBook = (id) => ({
//   type: REMOVE_BOOK,
//   id,
// });

// export const fetching = (data) => ({
//   type: FETCH_NEW_BOOK,
//   data,
// });

const bookReducer = (state = books, action) => {
  switch (action.type) {
    case `${FETCH_NEW_BOOK}/fulfilled`:
      return action.payload;

    case ADD_BOOK:
      return [...state, action.data];

    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((e) => e.item_id !== action.payload);

    default:
      return state;
  }
};

export const getBooks = createAsyncThunk(FETCH_NEW_BOOK, async () => {
  const response = await fetch(BaseURL);
  const data = await response.json();

  const booksList = Object.keys(data);
  const arr = [];

  booksList.map((key) => arr.push({
    item_id: key,
    title: data[key][0].title,
    author: data[key][0].author,
    category: 'data[key][0].category',
  }));
  return arr;
});

export const postBook = createAsyncThunk(ADD_BOOK, async (book) => {
  const response = await fetch(BaseURL, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.text();
  return data;
});

export const deleteBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await fetch(`${BaseURL}/id`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
  });

  return id;
});

export default bookReducer;
