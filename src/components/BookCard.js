import React from 'react';

const BookCard = ({ book, onAdd }) => {
  return (
    <div className="book-card">
      <h3>Book Title: {book.title}</h3>
      <p> Edition Count:{book.edition_count}</p>
      <p>{book.author_name && book.author_name.join(', ')}</p>
      <button onClick={() => onAdd(book)}>Add to Bookshelf</button>
    </div>
  );
};

export default BookCard;
