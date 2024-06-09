import React, { useState, useEffect } from 'react';

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBooks);
  }, []);

  return (
    <div>
      <h2>My Bookshelf</h2>
      <div className="bookshelf">
        {bookshelf.map((book, index) => (
          <div key={index} className="book-card">
            <h3>Book Title: {book.title}</h3>
            <p>{book.author_name && book.author_name.join(', ')}</p>
            <p> Edition Count: {book.edition_count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
