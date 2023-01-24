/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const base = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const url = `${base}/apps/9cmRMcVZ8DnPUoFM6AOr/books`;
const initialState = {
  books: [],
  loading: false,
};

export const gettingBooks = createAsyncThunk(

  'books/gettingBooks',

  async () => {
    const respo = await axios.get(url);
    const { data } = respo;
    const books = Object.entries(data).map(([key, value]) => {
      const { title, category, author } = value[0];
      return {
        Id: key,
        title,
        category,
        author,
      };
    });
    return books;
  },
);

export const addingBook = createAsyncThunk(
  'book/addingBook',
  async (payload, thunkAPI) => {
    await axios.post(url, payload);
    return thunkAPI.dispatch(gettingBooks());
  },
);

export const deletingBook = createAsyncThunk(
  'book/deletingBook',
  async (id, thunkAPI) => {
    await axios.delete(`${url}/${id}`);
    return thunkAPI.dispatch(gettingBooks());
  },
);
const bookFetcher = createSlice({
  name: 'booksReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [gettingBooks.pending]: (state) => {
      state.loading = true;
    },
    [gettingBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = action.payload;
    },
    [fetch.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default bookFetcher.reducer;
