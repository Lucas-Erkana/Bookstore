import types from '../types/types';
// initial state
const initialState = {
  numberOfBooks: '4',
  books: [

    { id: '01', title: 'In Search of Lost Time', author: 'Marcel Proust' },
    { id: '02', title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez' },
    { id: '03', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: '04', title: 'The Art of War', author: 'Sun Tzu' },
  ],
};
// Actions Creators
export const addingBook = (addedBook) => ({ type: types.ADDED_BOOK, addedBook });

export const removingBook = (id) => ({ type: types.REMOVED_BOOK, id });

// Reducers Creator
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADDED_BOOK:
      return {
        ...state,
        numberOfBooks: state.numberOfBooks + 1,
        books: [...state.books, action.addedBook],
      };
    case types.REMOVED_BOOK:
      return {
        numberOfBooks: state.numberOfBooks - 1,
        ...state,
        books: [...state.books.filter((book) => book.id !== action.id)],
      };
    default:
      return state;
  }
};

export default booksReducer;
