import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addingBook } from '../redux/fetch/booksFetcher';
import styles from './AddBookForm.module.css';

const AddBookForm = () => {
  const [newState, setnewState] = useState({
    item_id: '',
    title: '',
    author: '',
    category: '',
  });

  const onChangeHandler = (event) => {
    setnewState({
      ...newState,
      item_id: nanoid(),
      [event.target.name]: event.target.value,
      category: 'Category Action',
    });
  };

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addingBook(newState));
    setnewState({
      item_id: '',
      title: '',
      author: '',
      category: 'Category Action',
    });
  };

  return (
    <div className={styles.add_book}>
      <hr />
      <h2>ADD NEW BOOK</h2>
      <div>
        <form onSubmit={onSubmitHandler}>
          <input
            className={styles.input_1}
            type="text"
            name="title"
            placeholder="Add Title"
            required
            value={newState.title}
            onChange={onChangeHandler}
          />
          <input
            className={styles.input_2}
            type="text"
            name="author"
            placeholder="Add Author"
            required
            value={newState.author}
            onChange={onChangeHandler}
          />
          <button type="submit">ADD BOOK </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookForm;
