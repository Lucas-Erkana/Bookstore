import React from 'react';

const AddBookForm = () => (
  <div className="add_book">
    <h2>ADD NEW BOOK</h2>
    <div>
      <form>
        <input type="text" name="title" placeholder="Add Title" />
        <input type="text" name="author" placeholder="Add Author" />
        <button type="submit">ADD BOOK </button>
      </form>
    </div>
  </div>
);

export default AddBookForm;
