import axios from 'axios';
import React, { useEffect, useState } from 'react';

import BookImage from './BookImage';

const BookRelevenceList = ({ code }) => {
  const [books, setBooks] = useState([]);
  const getRelevence = async (isbn) => {
    await axios
      .get(`http://localhost:4000/books/relevence/${isbn}`, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      })
      .then((res) => {
        if (res.data.docs) {
          console.log(res.data.docs.slice(0, 10));
          setBooks(res.data.docs.slice(0, 10));
          return res.data.docs[0].book;
        }
      });
  };

  useEffect(() => {
    getRelevence(code);
  }, []);

  return (
    <>
      <div id="relevence_book_wrapper">
        {books &&
          books.map((book) => {
            return (
              <BookImage
                isbn={book.book.isbn13}
                itemid={book.book.itemId}
                state={getRelevence}
              />
            );
          })}
      </div>
    </>
  );
};

export default BookRelevenceList;
