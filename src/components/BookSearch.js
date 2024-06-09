import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const BookSearch = ({ onAddToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  // Fetch default books when the component mounts
  useEffect(() => {
    fetchBooks('default'); // Use a default query to fetch initial books
  }, []);

  const fetchBooks = async (query) => {
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
      setBooks(response.data.docs);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (newQuery) {
      fetchBooks(newQuery);
    } else {
      fetchBooks('default'); // Fetch default books if query is cleared
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleInputChange} placeholder="Search for books..." />
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.key} book={book} onAdd={onAddToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
