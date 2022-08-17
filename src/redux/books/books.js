const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const books = [
  { id: '1', name: 'Holly war', author: 'person1' },
  { id: '2', name: 'Alies in mageic world', author: 'person2' },
];

export const addBook = (data) => ({
  type: ADD_BOOK,
  data,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const bookReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.data];

    case REMOVE_BOOK:
      return state.filter((e) => e.id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;
