import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import booksFetcher from './fetch/booksFetcher';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    books: booksFetcher,
  },
});
export default store;
