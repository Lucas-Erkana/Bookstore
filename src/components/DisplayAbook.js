import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removingBook } from '../redux/books/books';

const DisplayAbook = (props) => {
  const { Title, Author, Id } = props;

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removingBook(Id));
  };

  return (
    <li className="book_item">
      <h2>{Title}</h2>
      <h4>{Author}</h4>
      <button type="button" onClick={handleRemove}>
        Remove
      </button>
    </li>
  );
};

DisplayAbook.propTypes = {
  Title: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
  Id: PropTypes.string.isRequired,
};

export default DisplayAbook;
