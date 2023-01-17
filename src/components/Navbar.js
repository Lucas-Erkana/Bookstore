import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Link to='/'>Books</Link>
        <Link to='/categories'>Categories</Link>
      </div>
    )
  }
}

export default Navbar;
