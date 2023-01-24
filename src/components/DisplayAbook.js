import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletingBook } from '../redux/fetch/booksFetcher';

const DisplayAbook = (props) => {
  const {
    Category, Title, Author, Id,
  } = props;

  const dispatch = useDispatch();

  const bookRemoveHandle = () => {
    dispatch(deletingBook(Id));
  };

  return (
    <li className="book_item">
      <h2>{Category}</h2>
      <h2>{Title}</h2>
      <h4>{Author}</h4>
      <button type="button" onClick={bookRemoveHandle}>
        Remove
      </button>
    </li>
  );
};

DisplayAbook.propTypes = {
  Category: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
  Id: PropTypes.string.isRequired,
};

export default DisplayAbook;
