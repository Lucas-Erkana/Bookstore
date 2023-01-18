import React from 'react';
import PropTypes from 'prop-types';

const DisplayAbook = (props) => {
  const { Title, Author } = props;
  return (
    <li className="book_item">
      <h2>{Title}</h2>
      <h4>{Author}</h4>
      <button type="button">Remove</button>
    </li>
  );
};

DisplayAbook.propTypes = {
  Title: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
};

export default DisplayAbook;
