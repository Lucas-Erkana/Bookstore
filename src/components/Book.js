import React from 'react';

class Book extends React.Component {
    render() {
        return (
            <div>
                <h3>Title: {this.props.title}</h3> <button>remove</button>
                <p>Author: {this.props.author}</p> <button>remove</button>
            </div>
        )
    }
}
export default Book;
