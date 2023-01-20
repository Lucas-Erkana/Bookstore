import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';

// combine all reducers together
const reducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});
// update state in store
const store = configureStore({
  reducer,
});
export default store;
