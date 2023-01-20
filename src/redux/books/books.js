import types from '../types/types';
// initial state
const initialState = {
  books: [],
};
// Actions Creators
export const addBook = (newBook) => ({ type: types.ADDED_BOOK, newBook });

export const removeBook = (id) => ({ type: types.REMOVED_BOOK, id });

// Reducers Creator
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADDED_BOOK:
      return {
        ...state,
        books: [...state, action.payload],
      };
    case types.REMOVED_BOOK:
      return {
        ...state,
        books: [...state.filter((book) => book.id !== action.payload.id)],
      };
    default:
      return state;
  }
};

export default booksReducer;
