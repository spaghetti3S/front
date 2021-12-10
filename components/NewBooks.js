import axios from 'axios';
import React, { useEffect, useState } from 'react';

import BookImage from './BookImage';

const NewBooks = ({ title, code }) => {
  const [bookList, setBookList] = useState([]);
  const getNewBooks = async () => {
    await axios
      .get(`http://15.165.57.229:8080/books/newBooks/${code}`, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      })
      .then((res) => {
        setBookList(res.data.item);
      });
  };

  useEffect(() => {
    getNewBooks();
  }, []);

  return (
    <div style={{ margin: '10px' }}>
      <div id="font_list" style={{ marginBottom: '10px' }}>
        {title}
      </div>
      <div className="sliderWrapper">
        {bookList.slice(0, 10).map((book) => (
          <BookImage imgLink={book.coverLargeUrl} isbn={book.isbn} />
        ))}
      </div>
    </div>
  );
};

export default NewBooks;
