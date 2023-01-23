import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addingBook } from '../redux/books/books';

const AddBookForm = () => {
  const [newState, setnewState] = useState({ id: '', title: '', author: '' });

  const arr = useSelector((state) => state.books.books);
  const id = arr.length;
  const onChange = (event) => {
    setnewState({
      ...newState,
      id: (id + 1).toString(),
      [event.target.name]: event.target.value,
    });
  };

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addingBook(newState));
    setnewState({ id: '', title: '', author: '' });
  };

  return (
    <div className="add_book">
      <h2>ADD NEW BOOK</h2>
      <div>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            name="title"
            placeholder="Add Title"
            required
            value={newState.title}
            onChange={onChange}
          />
          <input
            type="text"
            name="author"
            placeholder="Add Author"
            required
            value={newState.author}
            onChange={onChange}
          />
          <button type="submit">ADD BOOK </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookForm;
